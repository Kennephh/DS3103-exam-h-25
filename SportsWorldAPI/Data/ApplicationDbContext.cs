using Microsoft.EntityFrameworkCore;
using SportsWorldAPI.Models;

namespace SportsWorldAPI.Data
{
    public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
    {
        public DbSet<Athlete> Athletes { get; set; }
    }
}