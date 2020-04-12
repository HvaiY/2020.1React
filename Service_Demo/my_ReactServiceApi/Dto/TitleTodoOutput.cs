namespace my_ReactServiceApi.Dto
{
    public class TitleTodoOutput
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; }
        public bool IsCompleted { get; set; }
    }
}