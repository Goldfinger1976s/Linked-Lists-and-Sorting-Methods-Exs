const list = {
  head: {
    value: 6,
    next: {
      value: 10,
      next: {
        value: 12,
        next: {
          value: 3,
          next: null,
        },
      },
    },
  },
};

for(let i = 0; i < list.length; i++){

    list = list.next
    console.log(list)
}
    

console.log(list.head.next.next.next.value)