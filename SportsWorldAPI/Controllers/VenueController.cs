using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using SportsWorldAPI.Models;
using SportsWorldAPI.Data;

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
                return NotFound($"Venue with id: {id} not found.");
            }

            return Ok(venue);
        }
        catch (Exception e)
        {
            return StatusCode(500, $"Server side error: {e.Message}");
        }
    }

}