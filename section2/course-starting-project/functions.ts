function add(n1: number, n2: number) {
    const sum = n1 + n2;
    return sum;
  }
  
  function printResult(num: number): void {
    console.log("Result: " + num);
  }
  
  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
  }
  
  printResult(add(5, 12));
  
  let combineValues: (a: number, b: number) => number;
  
  combineValues = add;
  
  console.log(combineValues(8, 8));
  addAndHandle(10, 30, (result) => {
    console.log(result);
  });
  
  function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({ data: "Hi there!" });
  }
  
  sendRequest("Send this!", (response) => {
    console.log(response);
    return true;
  });
  