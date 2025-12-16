using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportsWorldAPI.Data;
using SportsWorldAPI.Models;

[ApiController]
[Route("api/[controller]")]
public class FinanceController(ApplicationDbContext _applicationDbContext) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<Finance>> GetFinancials()
    {
        try
        {
            var finances = await _applicationDbContext.Finances.FirstOrDefaultAsync();
            if (finances == null) return NotFound("Finances not found");

            return Ok(finances);
        }
        catch
        {
            return StatusCode(500, "Server side error when getting finances");
        }
    }


    [HttpPut]
    public async Task<ActionResult<Finance>> UpdateFinance([FromBody] Finance updatedFinance)
    {
        try
        {
            var finance = await _applicationDbContext.Finances.FirstOrDefaultAsync();
            if (finance == null) return NotFound("Finances not found");

            finance.MoneyLeft = updatedFinance.MoneyLeft;
            finance.MoneySpent = updatedFinance.MoneySpent;
            finance.NumberOfPurchases = updatedFinance.NumberOfPurchases;

            await _applicationDbContext.SaveChangesAsync();
            return Ok(finance);
        }
        catch
        {
            return StatusCode(500, "Server side error when updating finances");
        }
    }
}