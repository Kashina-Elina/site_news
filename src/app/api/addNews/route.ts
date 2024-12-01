import prisma from "../../lib/db";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Received data:", body);

    const newNews = await prisma.news.create({
      data: {
        title: body.title,
        date: new Date(body.date),
        excerpt: body.excerpt,
        text: body.text,
        image: body.image || null,
      },
    });

    return new Response(JSON.stringify(newNews), { status: 201 });
  } catch (error) {
    console.error("Error saving to database:", error);
    return new Response(JSON.stringify({ message: "Failed to save data" }), {
      status: 500,
    });
  }
}
//     return NextResponse.json({ message: "News added successfully!" });
//   } catch (error: any) {
//     console.error("Error:", error);
//     return NextResponse.json(
//       { message: "Failed to add news" },
//       { status: 500 }
//     );
//   }
// }
