namespace casting {
    
    let idade: any = 25;
    (idade as number).toFixed(2);
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x);
    });

    // as unknown conversão para um tipo desconhecido 
    let nome: string = 35 as unknown as string;

    // parseInt("35");
    // parseFloat("10");
    // 10.toString();
}
