using Microsoft.EntityFrameworkCore;
using SportsWorldAPI.Models;

namespace SportsWorldAPI.Data
{
    public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
    {
        public DbSet<Venue> Venues {get; set;}
        public DbSet<Athlete> Athletes { get; set; }
        public DbSet<Finance> Finances { get; set; }
        
    }
}