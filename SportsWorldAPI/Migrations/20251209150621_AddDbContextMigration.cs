using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SportsWorldAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddDbContextMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
            migrationBuilder.DeleteData(
                table: "Venues",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Venues",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Venues",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Venues",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Venues",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Venues",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Venues",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Venues",
                keyColumn: "Id",
                keyValue: 8);
        }
    }
}
