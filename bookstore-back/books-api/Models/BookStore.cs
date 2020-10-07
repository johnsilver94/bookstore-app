using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace books_api.Models
{
    public class BookStore
    {
        public List<Book> Books => new List<Book>
        {
            new Book{ Id = 1, Author = "J. K. Rowling", Title = "Harry Potter and the Philosopher's Stone", Price = 10.45M },
            new Book{ Id = 2, Author = "Herman Melville", Title = "Moby-Dick", Price = 8.52M },
            new Book{ Id = 3, Author = "Jules Verne", Title = "The Mysterious Island", Price = 7.11M },
            new Book{ Id = 4, Author = "Carlo Collodi", Title = "The Adventures of Pinocchio", Price = 6.42M }
        };

    }
}
