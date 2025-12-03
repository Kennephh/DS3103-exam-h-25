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
                query = query.Where(a => a.PurchaseStatus == purchaseStatus.Value);
            }

            var athletes = await context.Athletes.ToListAsync();
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
                    && athlete.Name.Contains(name, StringComparison.OrdinalIgnoreCase)
                ).ToListAsync();

            if (athletes.Count == 0) return NotFound("No athletes found.");

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
        try
        {
            await context.SaveChangesAsync();
        }
        catch
        {

        }
    }

}