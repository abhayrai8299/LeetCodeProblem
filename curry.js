function curryAdd(...args) {
        // start with the initial sum of all given numbers
        let sum = args.reduce((acc, n) => acc + n, 0);
      
        function inner(...next) {
          if (next.length === 0) {
            // if no arguments, return final sum
            return sum;
          }
          // add all new arguments to sum
          sum += next.reduce((acc, n) => acc + n, 0);
          return inner; // return itself for chaining
        }
      
        return inner;
      }
      
      // ✅ Usage
      console.log(curryAdd(1, 2, 3, 4)(2)(3, 4)());  // 19
      console.log(curryAdd(5)(10, 15)(20)());        // 50
      console.log(curryAdd(100, 200, 300)());        // 600
      