const sum= (x,y,z) => {
    const args = [x,y,z];
    return args.reduce((a,b) => a+b,0);
}

console.log(sum(1,3,4));