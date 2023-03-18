import { prisma } from "@/libs/prisma";

export default async function handler(req, res) {
    
    if(req.method != 'POST'){
        console.log('method tidak didukung');
        res.status(405).end();
    }

    const { email, password } = req.body;

    let data = await prisma.user.findFirst({
        where: {
            email,
        },
    })

    if(data.password == password){
        res.json(data);
    }else{
        res.json({ messages : "User tidak ditemukan" });
    }

}