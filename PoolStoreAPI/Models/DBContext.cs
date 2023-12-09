




using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PoolStoreAPI.Models;

namespace PoolStoreAPI.Models{
public class DBContext : IdentityDbContext<User>{


public DBContext(DbContextOptions options):base(options){


    
}
        protected override void OnModelCreating(ModelBuilder builder)
        {

            base.OnModelCreating(builder);

            builder.Entity<IdentityRole>().HasData(new IdentityRole { Name = "Member", NormalizedName = "MEMBER" },
            new IdentityRole { Name = "Admin", NormalizedName = "ADMIN" });
        }

        public DbSet<PoolStoreAPI.Models.Item> Item { get; set; } = default!;


public DbSet<PoolStoreAPI.Models.Location> Location { get; set; } = default!;

}
}