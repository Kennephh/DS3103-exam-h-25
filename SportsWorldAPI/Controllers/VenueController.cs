using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using SportsWorldAPI.Models;
using SportsWorldAPI.Data;
using Microsoft.Extensions.FileProviders;

namespace SportsWorldAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VenueController (ApplicationDbContext _appDbContext) : ControllerBase
{
    
    [HttpGet]
    public async Task<ActionResult<List<Venue>>> GetAllVenues()
    {
        try
        {
            List<Venue> venues = await _appDbContext.Venues.ToListAsync();

            if(venues == null || venues.Count == 0)
            {
                return Ok(new List<Venue>());
            }
            else
            {
                return Ok(venues);
            }
        }
        catch (Exception e)
        {
            return StatusCode(500, $"Server side error: {e.Message}");
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Venue>> GetVenueById(int id)
    {
        try
        {
            var venue = await _appDbContext.Venues.FindAsync(id);
            if(venue == null)
            {
                return NotFound($"Venue with id: '{id}' not found.");
            }
            return Ok(venue);
        }
        catch (Exception e)
        {
            return StatusCode(500, $"Server side error: {e.Message}");
        }
    }

    [HttpGet("ByName/{name}")]
    public async Task<ActionResult<Venue>> GetVenueByName(string name)
    {
        try
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                return BadRequest("Venue name cannot be empty or whitespace.");
            }
            var venue = await _appDbContext.Venues.FirstOrDefaultAsync(venue => venue.Name == name);
            
            if(venue == null)
            {
                return NotFound($"Venue with name: '{name}' could not be found.");
            }
            return Ok(venue);
        }
        catch (Exception e)
        {
            return StatusCode(500, $"Server sider error: {e.Message}");
        }
    }

    [HttpPost]
    public async Task<ActionResult<Venue>> PostVenue(Venue newVenue)
    {
        try
        {
            if(newVenue == null)
            {
                return BadRequest("Venue data is null.");
            }
            _appDbContext.Venues.Add(newVenue);
            await _appDbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetVenueById), new {id = newVenue.Id}, newVenue );
        }
        catch (Exception e)
        {
            return StatusCode(500, $"Server sider error: {e.Message}");
        }
    }

    [HttpPut]
    public async Task<IActionResult> PutVenue(int id, Venue updatedVenue)
    {
        try
        {
            if(id != updatedVenue.Id)
            {
                return BadRequest("Error updating the venue ");
            }
            return NoContent();
        }
        catch (Exception e)
        {
            return StatusCode(500, $"Server sider error: {e.Message}");
        }
    }


}