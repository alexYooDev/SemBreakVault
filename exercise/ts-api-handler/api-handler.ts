type ApiResponse = {
  /* prevent unexpected mutation */

  /* 
    Readonly: You cannot reassign the value after the object is created.
  */
  readonly status: number;
  readonly message: string;
};

export function GetUser(): ApiResponse {
    return {
        status: 200,
        message: "User data fetched Successfully!",
    }
}

const response = GetUser();

console.log(response.status);
console.log(response.message);