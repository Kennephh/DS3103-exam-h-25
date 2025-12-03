using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportsWorldAPI.Data;
using SportsWorldAPI.Models;


[ApiController]
[Route("api/[controller]")]
public class FinanceController( ApplicationDbContext _applicationDbContext ) : ControllerBase
{

    // GET
    [HttpGet]
    public async Task<ActionResult<Finance>> GetFinancials()
    {
        try{
            var finances = await _applicationDbContext.Finances.SingleOrDefaultAsync();
            return Ok(finances);
        }
        catch
        {
            return StatusCode(500, "Server side error when getting finances");
        }
    } // GET END

    // POST
    [HttpPost("loan")]
    public async Task<ActionResult> GetLoan([FromBody] int loanAmount)
    {
        try
        {
           var finances = await _applicationDbContext.Finances.FirstOrDefaultAsync();
           if (finances == null)
            {
                return NotFound("Finances not found");
            }
            
            finances.MoneyLeft += loanAmount;
            await _applicationDbContext.SaveChangesAsync();
            return Ok(finances);
        }
        catch
        {
            return StatusCode(500,"Server side error when posting loan");
        } 
    } // POST END

    
    
}



