function generateEmails(S, C) {
        const names = S.split(";").map(n => n.trim());
        const emails = {};
        const result = [];
      
        for (let fullName of names) {
          const parts = fullName.split(/\s+/); // split by spaces
          const first = parts[0].toLowerCase();
          let last = parts[parts.length - 1].toLowerCase();
      
          // Truncate last name to max 8 characters
          if (last.length > 8) {
            last = last.slice(0, 8);
          }
      
          let email = `${first}.${last}@${C}`;
          
          // Handle duplicates
          if (emails[email]) {
            emails[email] += 1;
            const emailWithNum = `${first}.${last}${emails[email]}@${C}`;
            result.push(emailWithNum);
          } else {
            emails[email] = 1;
            result.push(email);
          }
        }
      
        return result;
      }
      
      // Example usage
      const S = "john Doe; Peter Benjamin Parker; Mary Jane Watson-Parker";
      const C = "example.com";
      console.log(generateEmails(S, C));
      