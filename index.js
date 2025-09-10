import { getContext, FPS } from "./utils-module.js";

// กำหนดชื่อเรื่องของเอกสาร HTML
document.title = "A01 - App Graphics 2D";
// กำหนดให้ฟังก์ชัน main ทำงานเมื่อ DOM ถูกโหลดเสร็จสมบูรณ์
document.addEventListener("DOMContentLoaded", main);

// ฟังก์ชันหลักที่ใช้ในการเริ่มต้นแอปพลิเคชัน ทำงานเมื่อ DOM ถูกโหลดเสร็จสมบูรณ์
function main(ev) {
	// เข้าถึง context ของ canvas ที่มี id เป็น "myCanvas"
	const ctx = getContext("#myCanvas");

	
	let mousePos = {x:0,y:0};
	// อัปเดตตำแหน่งเมาส์เมื่อมีการเคลื่อนที่
	document.addEventListener("mousemove", function(evt){
		mousePos.x = evt.offsetX;
		mousePos.y = evt.offsetY;
	});

	//พื้นที่กำหนดตัวแปร
	let angel = 0; //มุมของการหมุน
	let cloudX = 650; // ตำแหน่งเริ่มต้นของเมฆ
	let cloudSpeed = 0.5; // ความเร็วเมฆ
	//ทำเมาส์ไว้หาพิกัด
	

	
	// กำหนดค่าเริ่มต้นสำหรับแอปพลิเคชันในรูปแบบของอ็อบเจกต์ config
	const config = {
		width : 800,
		height : 600,
		bgColor : "skyblue",
		debug : true,
	};


	// กำหนดขนาดของ canvas ตามค่า config
	ctx.canvas.width = config.width;
	ctx.canvas.height = config.height;

	function draw() {
		// ใช้ FPS สำหรับการวัดอัตราเฟรมต่อวินาที
		FPS.update();

		// กำหนดสีพื้นหลังของ canvas และใช้ fillRect เพื่อเติมสีพื้นหลัง
		ctx.fillStyle = config.bgColor;
		ctx.fillRect(0, 0, config.width, config.height);

		//ทำตัวเเสดงพิกัดบนจอ
		ctx.font = "15px Arial";
		ctx.fillStyle = "black";
		ctx.fillText(`Mouse: ${mousePos.x},${mousePos.y}`, 10, 45);
		
		//วาดภูเขาปิ้วว
		//รูปภูเขาเเรกกกกกก
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 4;
		ctx.moveTo(0,200);
		ctx.quadraticCurveTo(150,-100,300,200);
		ctx.closePath();
		ctx.fillStyle = "green";
		ctx.fill();
		ctx.stroke();

		//รูปภูเขาที่่สองง
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 4;
		ctx.moveTo(300, 200);
		ctx.bezierCurveTo(600, -150, 500, 300, 800, 80);
		ctx.lineTo(800, 200);
		ctx.fillStyle = "green";
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
		


		//ส่วนแฉกพระอาทิตย์
		ctx.save(); // เก็บสถานะก่อนแปลงพิกัด
		ctx.translate(300, 80); // ย้ายไปจุดกลางพระอาทิตย์
		ctx.rotate(angel);      // หมุนตามมุม angel
		ctx.translate(-300, -80); // ย้ายกลับเพื่อวาดจากพิกัดเดิม
		// วาดแฉกพระอาทิตย์
		ctx.beginPath();
		ctx.moveTo(265,35);
		ctx.lineTo(280,51);
		ctx.lineTo(290,30);
		ctx.lineTo(300,51);
		ctx.lineTo(310,30);
		ctx.lineTo(320,51);
		ctx.lineTo(335,35);
		ctx.lineTo(330,67);
		ctx.lineTo(350,65);
		ctx.lineTo(330,80);
		ctx.lineTo(350,95);
		ctx.lineTo(330,93);
		ctx.lineTo(335,125);
		ctx.lineTo(320,110);
		ctx.lineTo(310,130);
		ctx.lineTo(300,110);
		ctx.lineTo(290,130);
		ctx.lineTo(280,110);
		ctx.lineTo(265,125);
		ctx.lineTo(270,93);
		ctx.lineTo(250,95);
		ctx.lineTo(270,80);
		ctx.lineTo(250,65);
		ctx.lineTo(270,67);
		ctx.closePath();
		ctx.fillStyle = "rgba(255, 16, 16, 1)";
		ctx.fill();
		ctx.strokeStyle = "red";
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.restore(); // คืนค่าพิกัดเดิม
		
   //วาดพระอาทิตย์
		ctx.beginPath();
		ctx.arc(300, 80, 20, 0, Math.PI * 2);
		ctx.fillStyle = "rgba(255, 123, 0, 1)";
		ctx.fill();
		ctx.strokeStyle = "red";
		ctx.lineWidth = 4;
		ctx.stroke();

		
		//เติมฟิลสนามหญ้าข้างล่าง
		ctx.fillStyle = "rgba(78, 163, 97, 1)";
		ctx.fillRect(0, 200, 800, 600);


		//วาดแม่น้ำคงคา
		ctx.beginPath();
		ctx.moveTo(300, 200);
		ctx.bezierCurveTo(100, 500, 600, 500, 280, 600);
		ctx.lineTo(560, 600); 
		ctx.bezierCurveTo(600, 500, 200, 400, 500, 200); 
		ctx.fillStyle = "rgba(46, 199, 226, 1)"; 
		ctx.fill();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 4;
		ctx.stroke();

		//ส่วนของคลื่นน้ำ
		ctx.beginPath();//คลื่นน้ำที่ 1
		ctx.strokeStyle= "rgba(255,255,255,1)"
		ctx.moveTo(280,270);
		ctx.bezierCurveTo(330,210,350,300,400,250);
		ctx.stroke();
		ctx.beginPath();//คลื่นที่ 2
		ctx.moveTo(280,390);
		ctx.bezierCurveTo(300,340,355,420,380,370);
		ctx.stroke();
		ctx.beginPath();//คลื่นที่ 3
		ctx.moveTo(380,570);
		ctx.bezierCurveTo(420,500,480 ,600 ,530,540)
		ctx.stroke();
		ctx.beginPath();
		ctx.beginPath();
		ctx.moveTo(330,450);
		ctx.bezierCurveTo(345,410,390,470,410,430);
		ctx.stroke();


		//ส่วนนาเเละต้นข้าว
		ctx.fillStyle = "rgba(163, 116, 15, 1)"
		ctx.fillRect(30,470,150,70)
		ctx.beginPath();
		ctx.strokeStyle = "green"
		ctx.lineWidth = 5;
		ctx.moveTo(45,490)
		ctx.quadraticCurveTo(55,500,60,490);
		ctx.stroke();
		ctx.moveTo(75,490);
		ctx.quadraticCurveTo(80,500,90,490);
		ctx.stroke();
		ctx.moveTo(105,490);
		ctx.quadraticCurveTo(110,500,120,490);
		ctx.stroke();
		ctx.moveTo(135,490);
		ctx.quadraticCurveTo(140,500,150,490);
		ctx.stroke();
		ctx.moveTo(45,520);
		ctx.quadraticCurveTo(55,540,60,520);
		ctx.stroke();
		ctx.moveTo(75,520);
		ctx.quadraticCurveTo(80,540,90,520);
		ctx.stroke();
		ctx.moveTo(105,520);
		ctx.quadraticCurveTo(110,540,120,520);
		ctx.stroke();
		ctx.moveTo(135,520);
		ctx.quadraticCurveTo(140,540,150,520);
		ctx.stroke();


		//วาดทานตะวัน
		ctx.beginPath(); //ส่วนแฉก
		ctx.moveTo(232,492);
		ctx.quadraticCurveTo(220,475,240,490);
		ctx.quadraticCurveTo(247,470,250,495)
		ctx.quadraticCurveTo(265,480,255,505)
		ctx.quadraticCurveTo(271,513,256,515)
		ctx.quadraticCurveTo(243,518,240,511)
		ctx.quadraticCurveTo(227,519,227,507)
		ctx.quadraticCurveTo(215,497,232,493)
		ctx.fillStyle = "yellow"
		ctx.fill();
		//ส่วนก้าน
		ctx.beginPath(); 
		ctx.strokeStyle = "rgba(2, 49, 20, 1)"
		ctx.moveTo(240,550);
		ctx.lineTo(240,500);
		ctx.stroke();
		//ตรงกลางทานตะวัน
		ctx.beginPath();
		ctx.arc(240,500,10,0,Math.PI*2);
		ctx.fillStyle = "rgba(202, 100, 32, 1)"
		ctx.fill();
    //ส่วนใบ
		ctx.beginPath();
		ctx.moveTo(240,535);
		ctx.quadraticCurveTo(215,515,240,525);
		ctx.fillStyle = "rgba(2, 49, 20, 1)"
		ctx.fill();
		ctx.beginPath();
		ctx.moveTo(240,540);
		ctx.quadraticCurveTo(270,520,240,530);
		ctx.fill();


		//ส่วนของการวาดบ้านน
		//ชิ้นส่วนตัวบ้าน 1
		ctx.beginPath();
		ctx.moveTo(480,300);
		ctx.lineTo(480,370);
		ctx.lineTo(580,370);
		ctx.lineTo(580,300);
		ctx.closePath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 4;
		ctx.stroke();
		ctx.fillStyle = "rgba(102, 88, 74, 1)";
		ctx.fill();

		//ชิ้นส่วนหลังคาบ้าน 1
		ctx.beginPath();
		ctx.moveTo(480,300);
		ctx.lineTo(530,250);
		ctx.lineTo(580,300);
		ctx.closePath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 4;
		ctx.stroke();
		ctx.fillStyle = "rgba(221, 109, 94, 1)";
		ctx.fill();

		//ชิ้นส่วนตัวบ้าน 2
		ctx.beginPath();
		ctx.moveTo(700,300);
		ctx.lineTo(700,370);
		ctx.lineTo(580,370);
		ctx.lineTo(580,300);
		ctx.strokeStyle = "black";
		ctx.lineWidth = 4;
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "rgba(102, 88, 74, 1)";
		ctx.fill();
		//ชิ้นส่วนหลังคาบ้าน 2
		ctx.beginPath();
		ctx.moveTo(530,250);
		ctx.lineTo(700,250);
		ctx.lineTo(700,300);
		ctx.lineTo(580,300);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "rgba(221, 109, 94, 1)";
		ctx.fill();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 4;

		//ส่วนประตูบ้าน
		ctx.beginPath();
		ctx.moveTo(520,370);
		ctx.lineTo(520,340);
		ctx.lineTo(540,340);
		ctx.lineTo(540,370); 
		ctx.strokeStyle = "black";
		ctx.lineWidth = 4;
		ctx.closePath();
		ctx.fillStyle = "rgba(255, 255, 255, 1)";
		ctx.fill();
		ctx.stroke();

		//หน้าต่างบ้าน
		ctx.beginPath();
		ctx.moveTo(620,350);
		ctx.lineTo(600,350);
		ctx.lineTo(600,330);
		ctx.lineTo(620,330);
		ctx.strokeStyle = "black";
		ctx.lineWidth = 4;
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		ctx.fillStyle = "rgba(255, 255, 255, 1)";
		ctx.fillRect(650,330,20,20);
		ctx.strokeRect(650,330,20,20);


		//วาดต้นไม้
		ctx.beginPath(); //ช่วงของใบไม้
		ctx.moveTo(85,370);
		ctx.quadraticCurveTo(20,320,60,310);
		ctx.quadraticCurveTo(50,240,100,290);
		ctx.quadraticCurveTo(120,210,150,290);
		ctx.quadraticCurveTo(190,240,190,310);
		ctx.quadraticCurveTo(220,320,150,370);
		ctx.closePath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 4;
		ctx.stroke();
		ctx.fillStyle = "rgba(0, 255, 0, 1)";
		ctx.fill();
		
		//เริ่มช่วงลำต้น
		ctx.beginPath(); 
		ctx.lineWidth = 4;
		ctx.strokeStyle = "black";
		ctx.moveTo(80,450);
		ctx.quadraticCurveTo(120,400,80,350);
		ctx.lineTo(110,370);
		ctx.lineTo(120,340);
		ctx.lineTo(130,370);
		ctx.lineTo(160,340);
		ctx.quadraticCurveTo(120,400,160,450);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "rgba(150, 115, 79, 1)";
		ctx.fill();

		//วาดต้นสอง
		// วาดช่วงใบ
		ctx.beginPath();  
		ctx.lineWidth = 4;
		ctx.strokeStyle = "black";
		ctx.moveTo(700,490);
		ctx.quadraticCurveTo(650,440,690,430);
		ctx.quadraticCurveTo(680,380,730,410);
		ctx.quadraticCurveTo(752,350,770,410);
		ctx.quadraticCurveTo(800,390,790,440);
		ctx.quadraticCurveTo(820,470,790,490)
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "rgba(12, 49, 5, 1)";
		ctx.fill();

		//ช่วงลำต้น
		ctx.beginPath(); 
		ctx.lineWidth = 4;
		ctx.strokeStyle = "black";
		ctx.moveTo(700,570);
		ctx.quadraticCurveTo(730,520,700,460);
		ctx.lineTo(730,480);
		ctx.lineTo(740,450);
		ctx.lineTo(760,480);
		ctx.lineTo(790,460);
		ctx.quadraticCurveTo(750,520,790,570)
		ctx.closePath()
		ctx.stroke();
		ctx.fillStyle = "rgba(160, 126, 14, 1)";
		ctx.fill();
		
		//สะพาน
		ctx.fillStyle = "rgba(85, 39, 7, 1)";
		ctx.fillRect(330, 530, 220, -50);
		ctx.fillRect(330, 500, -50, 30);
		ctx.fillRect(550, 500, 50, 30);
		
		//วาดนก
		ctx.beginPath();
		ctx.moveTo(610,80);
		ctx.quadraticCurveTo(615,60,620,80);
		ctx.quadraticCurveTo(625,60,630,80);
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(650,90);
		ctx.quadraticCurveTo(655,70,660,90);
		ctx.quadraticCurveTo(665,70,670,90);
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(690,70);
		ctx.quadraticCurveTo(695,50,700,70);
		ctx.quadraticCurveTo(705,50,710,70);
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.stroke();


		//วาดสติกเเมนกำลังข้ามสะพาน
		ctx.beginPath();
		ctx.arc(515,425,10,0,Math.PI*2);
		ctx.fillStyle = "black"
		ctx.strokeStyle = "black";
		ctx.lineWidth = 4
		ctx.fill();
		ctx.moveTo(515,435);
		ctx.lineTo(515,465);
		ctx.lineTo(500,480);
		ctx.moveTo(515,465);
		ctx.lineTo(530,480);
		ctx.moveTo(515,440);
		ctx.lineTo(500,460);
		ctx.moveTo(515,440);
		ctx.lineTo(530,460);
		ctx.stroke();
	
		
		//วาดก้อนเมฆ
		ctx.beginPath();
		ctx.moveTo(cloudX, 60); // ใช้ cloudX แทนตำแหน่งคงที่ แล้วบวกค่า ของเคิฟจาก ค่าคงที่ของ x เอา
		ctx.quadraticCurveTo(cloudX + 10, 30, cloudX + 50, 50);  
		ctx.quadraticCurveTo(cloudX + 100, 35, cloudX + 85, 70); 
		ctx.quadraticCurveTo(cloudX + 70, 80, cloudX + 50, 70);
		ctx.quadraticCurveTo(cloudX + 20, 80, cloudX, 60);
		ctx.closePath();
		ctx.fillStyle = "white";
		ctx.fill();

		//ตำเเหน่งของเมฆ
		cloudX += cloudSpeed; //ให้ตำเเหน่งของเมฆเพิ่มขึ้นตามความเร็วที่เรากำหนดไว้ตั้งเเต่ต้น
		//ถ้าเมฆพ้นจอให้รีเซ็ตตำเเหน่งกลับมาซ้าย
		if (cloudX > config.width + 100) { //ถ้ามันเกินกว่าความกว้างของจอ +100 จุด
		cloudX = -100; // รีเซ็ตกลับทางซ้าย -100 จุด
		}

		// เขตสิ้นสุดของการวาดรูป


		// แสดงข้อความ FPS บน canvas ถ้า config.debug เป็น true
		if (config.debug) FPS.show(ctx, 10, 28);

		// ใช้ requestAnimationFrame เพื่อเรียกใช้ฟังก์ชัน draw ต่อไป
		angel += 0.003;
		requestAnimationFrame(draw);
	}
	// เริ่มต้นการวาดภาพบน canvas
	draw();
}