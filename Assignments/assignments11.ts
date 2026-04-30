
//Print the diamond of numbers
printDiamond(5);

function printDiamond(n: number): void {
  // diamond rows array
  const rows: string[] = [];

  // Upper half
  for (let i = 1; i <= n; i++) {
    
    const numbers: number[] = [];
    for (let j = 1; j <= i; j++) {
      numbers.push(j);
    }

    // Build spaces array 
    const spaces: string[] = [];
    for (let s = 0; s < n - i; s++) {
      spaces.push(" ");
    }

    // Combine spaces + numbers and store in rows
    rows.push(spaces.join("") + numbers.join(" "));
  }

  // Lower half
  for (let i = n - 1; i >= 1; i--) {
    const numbers: number[] = [];
    for (let j = 1; j <= i; j++) {
      numbers.push(j);
    }

    // Build spaces array
    const spaces: string[] = [];
    for (let s = 0; s < n - i; s++) {
      spaces.push(" ");
    }

    // Combine spaces + numbers and store in rows
    rows.push(spaces.join("") + numbers.join(" "));
  }

  // Print all rows
  for (let r = 0; r < rows.length; r++) {
    console.log(rows[r]);
  }
}



