let a = [1, 2, 3, 8, 9];
let b = [1, 2, 9, 10, 5];

const new_arr = a.filter((prev, curr, self) => {
  if (b.indexOf(curr) == -1) {
    return curr;
  }
});

let dup_arr = [2, 1, 1, 2, 3, 8, 9, 9, 5, 3];
let uni_arr = dup_arr.filter((value, index, self) => {
  return self.indexOf(value) == index;
});
console.log(uni_arr);
