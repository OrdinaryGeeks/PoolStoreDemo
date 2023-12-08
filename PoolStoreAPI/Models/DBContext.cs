




using Microsoft.EntityFrameworkCore;
using PoolStoreAPI.Models;

namespace PoolStoreAPI.Models{
public class DBContext : DbContext{


public DBContext(DbContextOptions options):base(options){


    
}


public DbSet<PoolStoreAPI.Models.Item> Item { get; set; } = default!;


public DbSet<PoolStoreAPI.Models.Location> Location { get; set; } = default!;

}
}