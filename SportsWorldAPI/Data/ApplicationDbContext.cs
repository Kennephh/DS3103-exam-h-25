using Microsoft.EntityFrameworkCore;
using SportsWorldApi.Models;

namespace SportsWorldAPI.Data
{
    public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
    {
        public DbSet<Athlete> Athletes { get; set; }
    }
}