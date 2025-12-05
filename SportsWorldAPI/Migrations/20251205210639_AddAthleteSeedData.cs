using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SportsWorldAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddAthleteSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 12);
        }
    }
}
