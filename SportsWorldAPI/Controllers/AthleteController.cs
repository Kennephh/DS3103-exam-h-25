using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportsWorldAPI.Models;
using SportsWorldAPI.Data;

namespace SportsWorldAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AthletesController(ApplicationDbContext context) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<List<Athlete>>> GetAthletes(bool? purchaseStatus = null)
    {
        try
        {
            var query = context.Athletes.AsQueryable();

            if (purchaseStatus.HasValue)
            {
                query = query.Where(athlete => athlete.PurchaseStatus == purchaseStatus.Value);
            }

            var athletes = await query.ToListAsync();

            return Ok(athletes);
        }
        catch
        {
            return StatusCode(500, "Error while fetching athletes.");
        }

    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Athlete>> GetAthlete(int id)
    {
        try
        {
            var athlete = await context.Athletes.FindAsync(id);

            if (athlete == null) return NotFound();

            return Ok(athlete);
        }
        catch
        {
            return StatusCode(500, "Error while fetching athlete.");
        }
    }

    [HttpGet("search")]
    public async Task<ActionResult<List<Athlete>>> SearchAthleteByName(string name)
    {
        try
        {
            if (string.IsNullOrEmpty(name))
            {
                return BadRequest("Search can't be empty.");
            }

            // Henter athletes som har navn og navnet inneholder "name"
            var athletes = await context.Athletes
                .Where( athlete =>
                    athlete.Name != null
                    && athlete.Name.ToLower().Contains(name.ToLower())
                ).ToListAsync();

            if (athletes.Count == 0) return Ok(new List<Athlete>());

            return Ok(athletes);
        }
        catch
        {
            return StatusCode(500, "Error while fetching athlete.");
        }
    }

    [HttpPost]
    public async Task<ActionResult<Athlete>> PostAthlete(Athlete athlete)
    {
        try
        {
            context.Athletes.Add(athlete);

            await context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAthlete), new { id = athlete.Id }, athlete); // Returnerer 201 created
        }
        catch
        {
            return StatusCode(500, "Error while creating athlete");
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutAthlete(int id, Athlete athlete)
    {

        var existingAthlete = await context.Athletes.FindAsync(id);
        if (existingAthlete == null) return NotFound();

        try
        {

            bool statusHasChanged = existingAthlete.PurchaseStatus != athlete.PurchaseStatus;

            if (statusHasChanged)
            {
                var finance = await context.Finances.FirstOrDefaultAsync();
                if (finance != null)
                {
                    if (athlete.PurchaseStatus)
                    {
                        finance.NumberOfPurchases++;
                        finance.MoneySpent += (int)athlete.Price;
                        finance.MoneyLeft -= (int)athlete.Price;
                    } else
                    {
                        finance.NumberOfPurchases--;
                    }
                }
            }

            existingAthlete.Name = athlete.Name;
            existingAthlete.Gender = athlete.Gender;
            existingAthlete.Price = athlete.Price;
            existingAthlete.Image = athlete.Image;
            existingAthlete.PurchaseStatus = athlete.PurchaseStatus;

            await context.SaveChangesAsync();

            return NoContent();
        }
        catch
        {
            return StatusCode(500, "Error while updating athlete.");
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAthlete(int id)
    {
        var athlete = await context.Athletes.FindAsync(id);

        if (athlete == null) return NotFound();

        try
        {
            context.Athletes.Remove(athlete);

            await context.SaveChangesAsync();

            return NoContent();
        }
        catch
        {
            return StatusCode(500, "Error while deleting athlete.");
        }


    }

}