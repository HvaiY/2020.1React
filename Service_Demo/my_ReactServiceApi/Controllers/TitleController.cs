using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using my_ReactServiceApi.Dto;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace my_ReactServiceApi.Controllers
{
    [ApiController]
    [EnableCors("Policy1")]
    [Route("[controller]/todos")]
    public class TitleController : Controller
    {

        [HttpGet]
        public IActionResult GetTitleTodos()
        {
            Thread.Sleep(3000);
            return Ok(new List<TitleTodoOutput>
            {
                new TitleTodoOutput
                {
                    Id = 1,
                    UserId = 1,
                    Title = "起床",
                    IsCompleted = true
                },
                new TitleTodoOutput
                {
                    Id = 2,
                    UserId = 1,
                    Title = "吃饭",
                    IsCompleted = false
                },
                new TitleTodoOutput
                {
                    Id = 3,
                    UserId = 1,
                    Title = "学习",
                    IsCompleted = false
                },
                new TitleTodoOutput
                {
                    Id = 4,
                    UserId = 1,
                    Title = "跑步",
                    IsCompleted = false
                },
                new TitleTodoOutput
                {
                    Id = 5,
                    UserId = 1,
                    Title = "午睡",
                    IsCompleted = true
                },
                new TitleTodoOutput
                {
                    Id = 6,
                    UserId = 1,
                    Title = "发呆",
                    IsCompleted = true
                },
                new TitleTodoOutput
                {
                    Id = 7,
                    UserId = 1,
                    Title = "听歌",
                    IsCompleted = false
                },
                new TitleTodoOutput
                {
                    Id = 8,
                    UserId = 1,
                    Title = "游戏",
                    IsCompleted = false
                },
                new TitleTodoOutput
                {
                    Id = 9,
                    UserId = 1,
                    Title = "吃饭",
                    IsCompleted = false
                },
                new TitleTodoOutput
                {
                    Id = 10,
                    UserId = 1,
                    Title = "学习",
                    IsCompleted = true
                }
            });
        }
    }
}