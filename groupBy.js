const users = [
        { name: "Abhay", age: 25 },
        { name: "Harsh", age: 26 },
        { name: "Shivansh", age: 25 }
      ];
      
      const result = {};
      
      function groupBy(users, key) {
        users.forEach(item => {
          const groupKey = item[key]; // e.g., 25 or 26
          if (!result[groupKey]) {   // check if the array exists
            result[groupKey] = [];   // if not, initialize it
          }
          result[groupKey].push(item); // push the item into the array
        });
        return result;
      }
      
      const grouped = groupBy(users, "age");
      console.log(grouped);
      