using Microsoft.EntityFrameworkCore;
using SportsWorldAPI.Models;

namespace SportsWorldAPI.Data
{
    public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
    {
        public DbSet<Venue> Venues {get; set;}
        public DbSet<Athlete> Athletes { get; set; }
        public DbSet<Finance> Finances { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Athlete>().HasData(
                new Athlete
                {
                    Id = 1,
                    Name = "Jon Jones",
                    Gender = "Male",
                    Price = 30000000,
                    Image = "/images/JonJones.jpg",
                    PurchaseStatus = false
                },
                new Athlete
                {
                    Id = 2,
                    Name = "Amanda Nunes",
                    Gender = "Female",
                    Price = 25000000,
                    Image = "/images/AmandaNunes.jpg",
                    PurchaseStatus = false
                },
                new Athlete
                {
                    Id = 3,
                    Name = "Conor McGregor",
                    Gender = "Male",
                    Price = 50000000,
                    Image = "/images/ConorMcGregor.jpeg",
                    PurchaseStatus = true
                },
                new Athlete
                {
                    Id = 4,
                    Name = "Daniel Cormier",
                    Gender = "Male",
                    Price = 25000000,
                    Image = "/images/DanielCormier.jpg",
                    PurchaseStatus = false
                },
                new Athlete
                {
                    Id = 5,
                    Name = "Donald Cerrone",
                    Gender = "Male",
                    Price = 15000000,
                    Image = "/images/DonaldCerrone.jpg",
                    PurchaseStatus = true
                },
                new Athlete
                {
                    Id = 6,
                    Name = "Georges St-Pierre",
                    Gender = "Male",
                    Price = 22000000,
                    Image = "/images/gsp.jpg",
                    PurchaseStatus = true
                },
                new Athlete
                {
                    Id = 7,
                    Name = "Jose Aldo",
                    Gender = "Male",
                    Price = 19000000,
                    Image = "/images/JoseAldo.jpg",
                    PurchaseStatus = true
                },
                new Athlete
                {
                    Id = 8,
                    Name = "Khabib Nurmagomedov",
                    Gender = "Male",
                    Price = 27000000,
                    Image = "/images/KhabibNurmagomedov.webp",
                    PurchaseStatus = false
                },
                new Athlete
                {
                    Id = 9,
                    Name = "Mauricio Rua",
                    Gender = "Male",
                    Price = 17000000,
                    Image = "/images/MauricioRua.png",
                    PurchaseStatus = false
                },
                new Athlete
                {
                    Id = 10,
                    Name = "Ronda Rousey",
                    Gender = "Female",
                    Price = 29000000,
                    Image = "/images/RondaRousey.jpeg",
                    PurchaseStatus = true
                },
                new Athlete
                {
                    Id = 11,
                    Name = "Valentina Shevchenko",
                    Gender = "Female",
                    Price = 32000000,
                    Image = "/images/ValentinaShevchenko.jpg",
                    PurchaseStatus = false
                },
                new Athlete
                {
                    Id = 12,
                    Name = "Mackenzie Dern",
                    Gender = "Female",
                    Price = 21000000,
                    Image = "/images/MackenzieDern.png",
                    PurchaseStatus = true
                }
            );

        }
    }
}