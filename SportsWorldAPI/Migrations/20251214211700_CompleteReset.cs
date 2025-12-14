using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SportsWorldAPI.Migrations
{
    /// <inheritdoc />
    public partial class CompleteReset : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Athletes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    Gender = table.Column<string>(type: "TEXT", nullable: true),
                    Price = table.Column<decimal>(type: "TEXT", nullable: false),
                    Image = table.Column<string>(type: "TEXT", nullable: true),
                    PurchaseStatus = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Athletes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Finances",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    MoneyLeft = table.Column<int>(type: "INTEGER", nullable: false),
                    NumberOfPurchases = table.Column<int>(type: "INTEGER", nullable: false),
                    MoneySpent = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Finances", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Venues",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    Capacity = table.Column<int>(type: "INTEGER", nullable: false),
                    Image = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Venues", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Athletes",
                columns: new[] { "Id", "Gender", "Image", "Name", "Price", "PurchaseStatus" },
                values: new object[,]
                {
                    { 1, "Male", "/images/JonJones.jpg", "Jon Jones", 30000000m, false },
                    { 2, "Female", "/images/AmandaNunes.jpg", "Amanda Nunes", 25000000m, false },
                    { 3, "Male", "/images/ConorMcGregor.jpeg", "Conor McGregor", 50000000m, true },
                    { 4, "Male", "/images/DanielCormier.jpg", "Daniel Cormier", 25000000m, false },
                    { 5, "Male", "/images/DonaldCerrone.jpg", "Donald Cerrone", 15000000m, true },
                    { 6, "Male", "/images/gsp.jpg", "Georges St-Pierre", 22000000m, true },
                    { 7, "Male", "/images/JoseAldo.jpg", "Jose Aldo", 19000000m, true },
                    { 8, "Male", "/images/KhabibNurmagomedov.webp", "Khabib Nurmagomedov", 27000000m, false },
                    { 9, "Male", "/images/MauricioRua.png", "Mauricio Rua", 17000000m, false },
                    { 10, "Female", "/images/RondaRousey.jpeg", "Ronda Rousey", 29000000m, true },
                    { 11, "Female", "/images/ValentinaShevchenko.jpg", "Valentina Shevchenko", 32000000m, false },
                    { 12, "Female", "/images/MackenzieDern.png", "Mackenzie Dern", 21000000m, true }
                });

            migrationBuilder.InsertData(
                table: "Finances",
                columns: new[] { "Id", "MoneyLeft", "MoneySpent", "NumberOfPurchases" },
                values: new object[] { 1, 10000000, 0, 0 });

            migrationBuilder.InsertData(
                table: "Venues",
                columns: new[] { "Id", "Capacity", "Image", "Name" },
                values: new object[,]
                {
                    { 1, 20000, "/images/venues/t-mobile-arena.jpg", "T-Mobile Arena" },
                    { 2, 20789, "/images/venues/madison-square-garden.jpg", "Madison Square Garden" },
                    { 3, 20000, "/images/venues/the-o2-arena.png", "The O2 Arena" },
                    { 4, 18000, "/images/venues/etihad-arena.jpeg", "Etihad Arena" },
                    { 5, 36500, "/images/venues/saitama-super-arena.jpg", "Saitama Super Arena" },
                    { 6, 12000, "/images/venues/singapore-indoor-stadium.jpg", "Singapore Indoor Stadium" },
                    { 7, 10000, "/images/venues/mohegan-sun-arena.png", "Mohegan Sun Arena" },
                    { 8, 15400, "/images/venues/jeunesse-arena.jpg", "Jeunesse Arena" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Athletes");

            migrationBuilder.DropTable(
                name: "Finances");

            migrationBuilder.DropTable(
                name: "Venues");
        }
    }
}
