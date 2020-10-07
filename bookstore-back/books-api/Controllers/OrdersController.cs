using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using books_api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace books_api.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly OrdersStore store;

        public OrdersController(OrdersStore store)
        {
            this.store = store;
        }

        [HttpGet]
        [Route("")]
        public IActionResult GetOrders()
        {
            return Ok(store.Orders);
        }
    }
}
