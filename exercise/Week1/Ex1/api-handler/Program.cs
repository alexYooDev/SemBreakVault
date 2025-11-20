public class ApiResponse (int status, string message)
{
    /* IMPROVEMENT: Add Contructor */

    /* 
     - Auto-implemented properties only generate getters/setters;
     - They do NOT enforce initialization or define business rules.


     ```csharp
     var r1 = new ApiResponse();                    // valid (null Message, Status 0)
     var r2 = new ApiResponse { Status = 200 };     // valid
     var r3 = new ApiResponse { Message = "ok" };   // valid
     var r4 = new ApiResponse { };                  // valid
     ```

    From a backend perspective, thesea are invalid states.
    An API response should always have: Status code, and Message
    
    So we use constructors to enforce required fields

    ✔ When to use constructors (best practice)

    Use constructors when:

    - Certain fields are required
    - You want to enforce object validity
    - You want to prevent partially constructed objects
    - You’re designing DTOs or API response models

    ✔ When auto-properties alone are sufficient

    - For simple POCOs (e.g., EF Core models loaded from DB)
    - When fields are optional
    - For serialization-only classes
     
     */

    /* Status Code */
    public int Status {get; set;} = status;
    /* API Message */
    public string Message {get; set;} = message;

    /* Instead, used primary constructor */

    // public ApiResponse (int status, string message)
    // {
    //     Status = status;
    //     Message = message;
    // }
}


public class UserController
{
    public ApiResponse GetUser()
    {
        // return new ApiResponse
        // {
        //     Status = 200,
        //     Message = "User data has been successfully fetched!"
        // };
        return new ApiResponse(200, "User data has been successfully fetched!");
    }
}

public static class Program
{
    public static void Main()
    {
        UserController userController = new UserController();

        ApiResponse response = userController.GetUser();

        Console.WriteLine(response.Status);
        Console.WriteLine(response.Message);
    }
}