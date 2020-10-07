using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace books_api.Models
{
    public class OrdersStore
    {
        public List<Order> Orders => new List<Order>
        {
            new Order{ Id = 1, BookId = 1, BookName = "Harry Potter and the Philosopher's Stone", Qty = 3 },
            new Order{ Id = 2,  BookId = 3, BookName = "The Mysterious Island", Qty = 2  },
            new Order{ Id = 3, BookId = 2, BookName = "Moby-Dick", Qty = 4 },
            new Order{ Id = 4, BookId = 4, BookName = "The Adventures of Pinocchio", Qty = 1 }
        };
    }
}
