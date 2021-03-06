using DotnetAppApi.Model;
using Microsoft.EntityFrameworkCore;

namespace DotnetAppApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext>  options) : base (options) {}

        public DbSet<Value> Values { get; set; }

    }
}