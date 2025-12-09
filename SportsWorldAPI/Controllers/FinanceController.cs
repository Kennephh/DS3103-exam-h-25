using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportsWorldAPI.Data;
using SportsWorldAPI.Models;


    /*
    Hvor mye penger selskapet har til rådighet?
        Ved kjøp av atlet; moneyLeft -= athlete.price 

    Hvor mange atleter har blitt kjøpt?
        var athleteCounter++

    Totalt forbruk
        var totalPriceSpent, ved hvert atlet kjøp så blir det totalPriceSpent += athlete.price

    Skriv inn mengde å låne fra banken
        finances.moneyLeft += loanAmount. Skal gjelden lagres? Da er det var debt += loanAmount

    Vis atleter som ikke er blitt kjøpt
        if(!athlete.purchased)
            return Ok(athletes)

    Kjøp atlet
        athlete.purchased = false
    */

[ApiController]
[Route("api/[controller]")]
public class FinanceController( ApplicationDbContext _applicationDbContext ) : ControllerBase
{

    // GET
    [HttpGet]
    public async Task<ActionResult<Finance>> GetFinancials()
    {
        try{
            var finances = await _applicationDbContext.Finances.SingleOrDefaultAsync(); // Henter en
            if(finances == null) return NotFound("Finances not found");

            return Ok(finances);
        }
        catch
        {
            return StatusCode(500, "Server side error when getting finances");
        }
    } // GET END

    // POST
    [HttpPost("loan")] // legge til gjeldSum?
    public async Task<ActionResult> GetLoan([FromBody] int loanAmount)
    {
        try
        {
           var finances = await _applicationDbContext.Finances.FirstOrDefaultAsync();
           if (finances == null) return NotFound("Finances not found");
            
            
            finances.MoneyLeft += loanAmount; // Plusser antall penger på bok med penger lånt
            await _applicationDbContext.SaveChangesAsync();
            return Ok(finances);
        }
        catch
        {
            return StatusCode(500,"Server side error when posting loan");
        } 
    } // POST END


    [HttpPut("purchase/{athleteId}")]
    public async Task<ActionResult> UpdateFinance(int athletePrice)
    {
        try
        {
            var finance = await _applicationDbContext.Finances.SingleOrDefaultAsync();
            if(finance == null) return NotFound("Finances not found");

            finance.MoneyLeft -= athletePrice;
            finance.MoneySpent += athletePrice;
            await _applicationDbContext.SaveChangesAsync();
            return Ok(finance);
            
        }
        catch
        {
            return StatusCode(500,"Server side error when updating finances");
        }
    }
}



