using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SportsWorldAPI.Migrations
{
    /// <inheritdoc />
    public partial class newMigrationNew : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 3,
                column: "PurchaseStatus",
                value: false);

            migrationBuilder.UpdateData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 5,
                column: "PurchaseStatus",
                value: false);

            migrationBuilder.UpdateData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 6,
                column: "PurchaseStatus",
                value: false);

            migrationBuilder.UpdateData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 7,
                column: "PurchaseStatus",
                value: false);

            migrationBuilder.UpdateData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 10,
                column: "PurchaseStatus",
                value: false);

            migrationBuilder.UpdateData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 12,
                column: "PurchaseStatus",
                value: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 3,
                column: "PurchaseStatus",
                value: true);

            migrationBuilder.UpdateData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 5,
                column: "PurchaseStatus",
                value: true);

            migrationBuilder.UpdateData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 6,
                column: "PurchaseStatus",
                value: true);

            migrationBuilder.UpdateData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 7,
                column: "PurchaseStatus",
                value: true);

            migrationBuilder.UpdateData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 10,
                column: "PurchaseStatus",
                value: true);

            migrationBuilder.UpdateData(
                table: "Athletes",
                keyColumn: "Id",
                keyValue: 12,
                column: "PurchaseStatus",
                value: true);
        }
    }
}
