/* ===== Chuyển ngôn ngữ Việt / Anh (VI / EN) =====
   - Tiếng Việt là nội dung gốc trong index.html.
   - Muốn sửa bản tiếng Anh: chỉnh trong bảng EN bên dưới (khóa = câu tiếng Việt gốc).
   - Muốn thêm nội dung mới: thêm 1 dòng  'câu tiếng Việt':'English text'  vào EN. */
const I18N=(()=>{
  let lang='vi';
  try{lang=localStorage.getItem('nanhLang')==='en'?'en':'vi'}catch(e){}

  const EN={
    /* Menu + thanh công cụ */
    'Trang chủ':'Home','Về Nành':'About Nành','Sản phẩm':'Products','Hướng dẫn sử dụng':'How to use',
    'Menu chính':'Main menu','Đăng nhập / Đăng ký':'Log in / Sign up','Tìm sản phẩm…':'Search products…',
    'Tìm sản phẩm':'Search products','Tìm kiếm':'Search','Giỏ hàng':'Cart','Giảm':'Decrease','Tăng':'Increase','Xóa':'Remove',

    /* Trang chủ */
    'Nến sáp đậu nành tích hợp tinh dầu chuẩn hóa khoa học. Khi đốt, phân tử hương thơm tác động lên hệ thần kinh giúp điều hòa nhịp thở. Đi kèm sản phẩm là một Mã QR độc bản trên bao bì để mở khóa Kho nhạc sóng não (Alpha/Theta Waves).':
    'Soy wax candles infused with scientifically standardized essential oils. As the candle burns, the scent molecules act on the nervous system and help regulate your breathing. Each product comes with a unique QR code on the packaging that unlocks a library of brainwave music (Alpha/Theta Waves).',

    /* Về Nành */
    'Câu chuyện hình thành':'Our story','Ý nghĩa tên gọi “Nành”':'The meaning of “Nành”','Tầm nhìn và sứ mệnh':'Vision and mission',
    'Giá trị cốt lõi':'Core values','Định vị thương hiệu':'Brand positioning',
    'NÀNH – THẮP SÁNG DI SẢN, VỖ VỀ GIÁC QUAN':'NÀNH – LIGHTING UP HERITAGE, SOOTHING THE SENSES',
    'Tìm về – Nơi ngọn lửa mộc mạc nhóm lên bình yên':'Returning – Where a humble flame kindles peace',
    'NÀNH bắt đầu từ những nguyên liệu mộc mạc nhất, mong muốn trở thành chốn trú ẩn an toàn để bạn trút bỏ muộn phiền và trở về với chính mình.':
    'NÀNH begins with the humblest of ingredients, hoping to become a safe haven where you can let go of your worries and come back to yourself.',
    'Chạm đến – Trải nghiệm "One touch, all senses" qua miền di sản':'Reaching out – The "One touch, all senses" experience through the heritage regions',
    'Từ ngọn lửa ấy, một lần chạm thắp lên sẽ mở ra trải nghiệm Phygital độc bản qua ba miền di sản: thị giác mãn nhãn với nét vẽ thủ công, khứu giác đắm chìm trong hương tự nhiên, và thính giác lắng đọng cùng playlist chữa lành.':
    'From that flame, a single touch to light the candle opens a one-of-a-kind Phygital experience across three heritage regions: a visual feast of hand-drawn artwork, a sense of smell immersed in natural fragrance, and a sense of hearing settled by a healing playlist.',
    'Trở về – Hòa quyện hương sắc âm, tìm lại chính mình':'Coming home – Scent, colour and sound in harmony, finding yourself again',
    'Mang trái tim trẻ trung đầy tự hào Việt Nam, NÀNH ở đây để hòa quyện hương – sắc – âm, khép lại bão giông ngoài kia và giúp bạn tìm lại sự nguyên bản trọn vẹn trong tâm hồn.':
    'With a young heart full of Vietnamese pride, NÀNH is here to blend scent, colour and sound, close the door on the storms outside, and help you rediscover the wholeness of your original self.',
    'Gieo mầm bình yên – Khi hạt lành chọn một danh xưng':'Sowing the seeds of peace – When a gentle bean chooses a name',
    'Hạt đậu nành vốn là nguyên liệu mộc mạc, lành tính và quen thuộc. Giữa nhịp sống hiện đại nhiều áp lực, người trẻ ngày càng tìm kiếm những giá trị nguyên bản để chữa lành tâm trí. Từ đó, NÀNH ra đời với mong muốn mang đến một không gian sống an lành cho người trẻ.':
    'The soybean is a humble, gentle and familiar ingredient. In the pressure of modern life, young people increasingly look for original values to heal their minds. From there, NÀNH was born, with the wish to bring a peaceful living space to young people.',
    'Gọt giũa thanh âm – Từ hạt lành đến không gian số':'Refining the sound – From a gentle bean to the digital space',
    'NÀNH sử dụng sáp đậu nành thiên nhiên để tạo nên nến thơm, đồng thời tôn vinh giá trị nông sản bản địa dưới góc nhìn hiện đại. Tên NÀNH được hình thành từ “An” – an tâm, bình yên và “Lành” – lành tính, nhẹ nhàng, sau đó rút gọn thành một âm tiết ngắn gọn, dễ nhớ. Mỗi lần thắp nến là sự kết hợp giữa hương thơm – nét vẽ nghệ thuật – playlist âm thanh thư giãn.':
    'NÀNH uses natural soy wax to make scented candles, honouring local agricultural produce from a modern perspective. The name NÀNH comes from “An” – peace of mind and calm – and “Lành” – gentle and wholesome, shortened into a single, short, memorable syllable. Every time you light a candle, scent, artwork and a relaxing playlist come together.',
    'Khép lại bão giông – Hương sắc vẹn nguyên, tâm hồn phẳng lặng':'Closing the door on the storm – Scent and colour intact, a still and quiet mind',
    'NÀNH là một khoảng dừng dành cho người trẻ bận rộn. Thông qua sự hòa quyện của hương – sắc – âm, NÀNH giúp bạn tạm ngắt kết nối với những ồn ào bên ngoài, tìm lại cảm giác bình yên và nguyên bản bên trong.':
    'NÀNH is a pause for busy young people. Through the blend of scent, colour and sound, NÀNH helps you disconnect for a while from the noise outside and find the calm and authenticity within.',
    'Tầm nhìn':'Vision','Sứ mệnh':'Mission',
    'Trở thành thương hiệu Phygital Lifestyle dẫn đầu tại Việt Nam trong việc tôn vinh di sản văn hóa 3 miền và chăm sóc sức khỏe tinh thần trọn vẹn cho thế hệ trẻ.':
    'To become the leading Phygital Lifestyle brand in Vietnam in honouring the cultural heritage of the three regions and caring for the complete mental well-being of the young generation.',
    'NÀNH đồng hành cùng giới trẻ tái tạo năng lượng sống bằng những nghi thức ngắt kết nối đa giác quan – nơi sáp nành an lành, nghệ thuật di sản 3 miền và âm thanh sóng não hòa cùng làm một.':
    'NÀNH accompanies young people in renewing their energy through multi-sensory disconnecting rituals – where gentle soy wax, three-region heritage art and brainwave sounds become one.',
    'An yên':'Serenity','Kết nối':'Connection','Sáng tạo':'Creativity','Phụng sự':'Service',
    'Chúng tôi kiến tạo những trải nghiệm giúp con người tạm dừng khỏi nhịp sống vội vã, trở về với chính mình và nuôi dưỡng sự cân bằng trong đời sống mỗi ngày.':
    'We create experiences that help people pause from the rush of life, return to themselves and nurture balance in their everyday lives.',
    'Chúng tôi kết nối con người với bản thân, không gian sống và cộng đồng thông qua những trải nghiệm giao thoa giữa thế giới vật lý và kỹ thuật số.':
    'We connect people with themselves, their living spaces and their community through experiences where the physical and digital worlds meet.',
    'Chúng tôi không ngừng khám phá những cách thức mới để biến những giá trị truyền thống và chất liệu tự nhiên thành những trải nghiệm sống hiện đại, gần gũi và giàu cảm xúc.':
    'We constantly explore new ways to turn traditional values and natural materials into modern, approachable and emotionally rich life experiences.',
    'Chúng tôi phụng sự đời sống tinh thần bằng những sản phẩm và trải nghiệm giúp con người chăm sóc bản thân, cân bằng cảm xúc và sống an yên hơn.':
    'We serve people’s inner lives with products and experiences that help them look after themselves, balance their emotions and live more peacefully.',
    'Đối với người trẻ yêu thích nến thơm và tìm kiếm sự thư giãn, NÀNH là thương hiệu nến thơm kết hợp văn hóa ba miền và âm nhạc chữa lành, tạo nên trải nghiệm thư giãn mang dấu ấn Việt.':
    'For young people who love scented candles and seek relaxation, NÀNH is the scented candle brand that combines the culture of the three regions with healing music, creating a relaxing experience with a distinctly Vietnamese touch.',

    /* Sản phẩm */
    'NẾN THƠM':'SCENTED CANDLES','Nến thơm Nành':'Nành scented candles','Tất cả sản phẩm':'All products',
    'Trà xanh hoa nhài':'Jasmine green tea','Sen':'Lotus','Hoa hồng':'Rose','Cam quế':'Orange & cinnamon',
    'Xem chi tiết':'View details','Không tìm thấy sản phẩm phù hợp.':'No matching products found.',
    'Thêm vào giỏ hàng':'Add to cart','Mua ngay':'Buy now','Đóng':'Close','Chi tiết sản phẩm':'Product details',

    /* Hướng dẫn */
    'Tip 1: Chuẩn bị bấc nến trước khi đốt':'Tip 1: Prepare the wick before lighting',
    'Trước mỗi lần sử dụng, hãy cắt tim nến còn khoảng 5 - 6mm để ngọn lửa cháy ổn định và hạn chế khói đen. Bên cạnh đó, nên kiểm tra bề mặt nến và loại bỏ các vụn bấc hoặc vật lạ nếu có.':
    'Before each use, trim the wick to about 5–6 mm so the flame burns steadily and produces less black smoke. Also check the candle surface and remove any wick debris or foreign objects.',
    'Tip 2: Để sáp tan đều trong lần đốt đầu tiên':'Tip 2: Let the wax melt evenly on the first burn',
    'Trong lần sử dụng đầu tiên, hãy để nến cháy đủ lâu để lớp sáp tan đều từ khu vực tim nến ra gần thành hũ. Điều này giúp tạo một vùng sáp tan đồng đều, hạn chế tình trạng sáp chỉ cháy lõm ở giữa và để lại nhiều sáp ở xung quanh.':
    'On the first use, let the candle burn long enough for the wax to melt evenly from the wick out to near the edge of the jar. This creates an even melt pool and prevents the candle from tunnelling down the middle and leaving a lot of wax around the sides.',
    'Tip 3: Chọn nơi đặt nến an toàn':'Tip 3: Choose a safe place for your candle',
    'Đặt nến trên một bề mặt phẳng, chắc chắn và chịu nhiệt, đồng thời chọn nơi thông thoáng nhưng tránh gió mạnh hoặc luồng không khí thổi trực tiếp. Nên giữ nến cách xa rèm cửa, giấy, quần áo và các vật liệu dễ bắt lửa. Đặc biệt, không di chuyển hũ nến khi sáp đang nóng hoặc ở trạng thái lỏng để tránh làm đổ sáp và gây bỏng.':
    'Place the candle on a flat, stable, heat-resistant surface in a well-ventilated spot, away from strong wind or direct drafts. Keep it away from curtains, paper, clothing and other flammable materials. In particular, do not move the jar while the wax is hot or liquid, to avoid spilling wax and burns.',
    'Tip 4: Không đốt nến quá lâu':'Tip 4: Don’t burn the candle for too long',
    'Mỗi lần sử dụng, nên đốt nến trong khoảng 2–3 giờ và không để nến cháy liên tục quá lâu.':
    'Burn the candle for about 2–3 hours at a time and do not let it burn continuously for too long.',
    'Tip 5: Tắt nến đúng cách sau khi sử dụng':'Tip 5: Extinguish the candle properly after use',
    'Sau khi sử dụng, nên dùng dụng cụ tắt nến chuyên dụng hoặc nhẹ nhàng dập lửa thay vì thổi mạnh để hạn chế khói và mùi khét. Sau đó, chờ sáp nguội và đông hoàn toàn trước khi di chuyển hoặc bảo quản hũ nến.':
    'After use, use a candle snuffer or gently put out the flame instead of blowing hard, to reduce smoke and burnt smell. Then wait for the wax to cool and set completely before moving or storing the jar.',
    'Cách bảo quản':'Storage',
    'Bảo quản nến ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nguồn nhiệt cao.':'Store the candle in a dry, cool place, away from direct sunlight and high heat.',
    'Đậy nắp sau khi sử dụng để hạn chế bụi và giúp hương thơm được lưu giữ tốt hơn.':'Put the lid back on after use to keep out dust and preserve the fragrance better.',
    'Không để nến trong xe hơi hoặc nơi có nhiệt độ cao trong thời gian dài vì sáp đậu nành có nhiệt độ nóng chảy tương đối thấp, dễ bị mềm hoặc chảy.':
    'Do not leave the candle in a car or any hot place for long periods, as soy wax has a relatively low melting point and can easily soften or melt.',
    'Hạn chế để nến tiếp xúc trực tiếp với ánh nắng vì có thể làm thay đổi màu sắc của sáp và artwork trên hũ.':
    'Avoid direct sunlight, which can change the colour of the wax and the artwork on the jar.',
    'Các lưu ý an toàn khi đốt nến':'Safety notes when burning candles',
    'Không để nến đang cháy mà không có người trông coi.':'Never leave a burning candle unattended.',
    'Để xa tầm tay trẻ em và vật nuôi.':'Keep out of reach of children and pets.',
    'Không đặt nến gần vật liệu dễ bắt lửa.':'Do not place the candle near flammable materials.',
    'Không đốt nến trên bề mặt không ổn định.':'Do not burn the candle on an unstable surface.',
    'Không chạm vào phần sáp nóng hoặc thành hũ khi nến vừa tắt.':'Do not touch the hot wax or the jar right after the candle is out.',
    'Ngừng sử dụng khi lượng sáp còn khoảng 1–1,5 cm ở đáy hũ để tránh làm hũ quá nóng.':
    'Stop using the candle when about 1–1.5 cm of wax remains at the bottom of the jar, to prevent the jar from overheating.',
    'Không sử dụng nến nếu hũ bị nứt, vỡ hoặc có dấu hiệu hư hỏng.':'Do not use the candle if the jar is cracked, broken or shows signs of damage.',
    'Chỉ sử dụng nến đúng mục đích và theo hướng dẫn của sản phẩm.':'Use the candle only for its intended purpose and according to the product instructions.',
    'Sử dụng nến thơm không chỉ là thắp lên một ngọn lửa, mà còn là cách bạn tạo nên một khoảng thời gian thư giãn cho chính mình. NÀNH hy vọng mỗi lần thắp nến sẽ trở thành một khoảnh khắc thật dễ chịu, an toàn và trọn vẹn hơn.':
    'Using a scented candle is not just lighting a flame, but a way to create a moment of relaxation for yourself. NÀNH hopes every candle you light becomes a more pleasant, safe and complete moment.',
    'Thắp nến':'Light your candle','thật an toàn':'the safe way',

    /* Giỏ hàng + lịch sử + form */
    'Lịch sử mua hàng':'Order history','Tổng cộng:':'Total:','Tổng cộng':'Total','Thông tin nhận hàng':'Delivery information',
    'Họ và tên':'Full name','Số điện thoại':'Phone number','Địa chỉ nhận hàng':'Delivery address',
    'Ghi chú (không bắt buộc)':'Note (optional)','Thanh toán':'Payment',
    'Thanh toán khi nhận hàng (COD)':'Cash on delivery (COD)','Chuyển khoản ngân hàng':'Bank transfer','Đặt hàng':'Place order',
    'Giỏ hàng đang trống.':'Your cart is empty.','Xem sản phẩm':'Browse products',
    'Vui lòng đăng nhập để xem lịch sử mua hàng.':'Please log in to view your order history.',
    'Bạn chưa có đơn hàng nào.':'You have no orders yet.','Mua sắm ngay':'Shop now','Xin chào,':'Hello,',
    'Đăng xuất':'Log out','Đang xử lý':'Processing','Đã hủy':'Cancelled','Hủy đơn hàng':'Cancel order','Đã hủy đơn hàng':'Order cancelled','Bạn có chắc muốn hủy đơn hàng này?':'Are you sure you want to cancel this order?','Mã đơn':'Order ID','Giao tới:':'Ship to:','Ghi chú:':'Note:',
    'Thanh toán khi nhận hàng':'Cash on delivery',

    /* Đăng nhập / đăng ký */
    'Đăng nhập':'Log in','Đăng ký':'Sign up','Mật khẩu':'Password','Nhập lại mật khẩu':'Confirm password',
    'Đăng nhập hoặc đăng ký':'Log in or sign up',
    'Vui lòng nhập họ và tên.':'Please enter your full name.','Mật khẩu nhập lại chưa khớp.':'The passwords do not match.',
    'Email này đã được đăng ký.':'This email is already registered.','Email hoặc mật khẩu chưa đúng.':'Incorrect email or password.',
    'Vui lòng đăng nhập để đặt hàng':'Please log in to place an order','Đã đăng xuất':'Logged out',

    /* Chân trang */
    'Đây là sản phẩm phục vụ cho môn học Truyền thông số - Sinh viên trường Đại học Văn Lang':
    'This is a project for the Digital Communication course – students of Van Lang University',
    'Ý nghĩa tên gọi NÀNH':'Meaning of the name NÀNH','Bộ sưu tập':'Collections',
    'Mộng Hà Thành':'Hanoi Dream',
    'MỘNG HÀ THÀNH':'HANOI DREAM','THÁNG BA XỨ BẮC':'MARCH IN THE NORTH','NẮNG NGHỆ SÔNG HƯƠNG':'GOLDEN SUN OVER THE PERFUME RIVER',
    'HOÀI PHỐ ĐÊM TRĂNG':'MOONLIT NOSTALGIC STREET','SÀI GÒN GIÓ MÁT':'SAIGON COOL BREEZE','NẮNG MỚI MIỀN TÂY':'NEW SUNSHINE OF THE MEKONG DELTA',
    'Bộ sưu tập':'Collections','Ảnh trước':'Previous photo','Ảnh sau':'Next photo','Bộ ảnh hũ nến':'Candle jar photos'
  };

  /* Câu có chứa số / tên (động) */
  const PAT=[
    [/^Đã bán (\d+)$/,'Sold $1'],
    [/^Xin chào (.+)!$/,'Hello $1!'],
    [/^Đặt hàng thành công! Mã đơn (.+)$/,'Order placed successfully! Order ID $1'],
    [/^Đã thêm (\d+) × (.+) vào giỏ$/,(m,q,n)=>'Added '+q+' × '+tr(n)+' to cart']
  ];

  /* Mô tả sản phẩm (khóa = tên tiếng Việt của sản phẩm) */
  const DESC={
    'Trà xanh hoa nhài':'A fresh, gentle green tea scent combined with the soft, slightly sweet fragrance of jasmine, creating a clean and relaxing feeling in your space. Perfect for reading, resting or enjoying a quiet moment to yourself.',
    'Sen':'A delicate, gentle lotus fragrance that brings a calm and fresh feeling to your space. Perfect for moments when you want to unwind, meditate or enjoy a quiet time.',
    'Hoa hồng':'A soft, feminine rose fragrance with a touch of sweetness, creating a gentle and romantic feeling in your space. Perfect for self-care, a bubble bath or some time to yourself.',
    'Cam quế':'A bright orange scent combined with warm cinnamon, creating a cozy, comfortable and energizing atmosphere. Perfect for relaxing, working or creating a warm and intimate mood.',
    'MỘNG HÀ THÀNH':`Autumn gifts from Hanoi always carry a powerful sense of nostalgia, awakening tender memories of a time long past. The “Hanoi Dream” scented candle is a simple, rustic journey through scent, bringing the breath of an autumn street corner into your little room. No need to go anywhere – just light the flame and the jar releases a gentle, sweetly chewy fragrance of freshly pounded young green rice flakes (cốm), blended with the calm of Old Quarter tea. This scent softly soothes the nervous system and brings a strangely deep stillness and peace.
The label artwork depicts the majestic Ho Chi Minh Mausoleum under the fluttering red flag with a yellow star, set against a sky of a thousand years of culture, expressing national pride and the enduring beauty of history.
SCENT NOTES
Top notes: Làng Vòng sticky young rice flakes, heather
Middle notes: Old Quarter tea, fresh lotus leaf
Base notes: Cedarwood, warm amber
EACH SET INCLUDES
Premium soy wax candle jar (180g)
Card with a QR code to a healing music playlist (Đàn bầu & Hát xẩm)
Packed in a neat, eco-friendly paper gift box`,
    'THÁNG BA XỨ BẮC':`The fresh, dewy air of the ancient capital carries a resilience and elegance that transcend time. The “March in the North” scented candle takes you strolling past majestic limestone ranges, breathing in white lotus blossoms in full bloom along the Tràng An river, blended with the cool freshness of wild lemon on a misty morning. The scent brings a feeling of cleansing, purifying negative energy and restoring inner clarity.
The image of the ancient gate of Hoa Lư Ancient Capital, mirrored beside rivers, mountains and clouds, expresses steadfastness, historical roots and the unspoiled beauty of the Northern countryside.
SCENT NOTES
Top notes: Wild lemon, dewy grass
Middle notes: Tràng An white lotus, areca flower
Base notes: Mossy ancient stone, pine wood
EACH SET INCLUDES
Premium soy wax candle jar (180g)
Card with a QR code to a healing music playlist (Đàn tranh & flowing water)
Packed in a neat, eco-friendly paper gift box`,
    'NẮNG NGHỆ SÔNG HƯƠNG':`The graceful, shy yet profound beauty of the ancient capital of Huế always stirs indescribable feelings. The “Golden Sun over the Perfume River” scented candle evokes a quiet royal palace with the dreamy note of ripe thanh trà – the famed fruit once offered to the emperor – blended with the elegance of ylang-ylang and a touch of alluring agarwood. The scent soothes hurts and nurtures depth and calm in the soul.
The artwork of Ngọ Môn Gate in Huế, glittering under the night sky, portrays the poetic, romantic and mysterious charm of this heritage land.
SCENT NOTES
Top notes: Huế thanh trà, orange peel oil
Middle notes: Ylang-ylang, magnolia
Base notes: Royal palace agarwood, sandalwood
EACH SET INCLUDES
Premium soy wax candle jar (180g)
Card with a QR code to a healing music playlist (Đàn nguyệt on the Perfume River)
Packed in a neat, eco-friendly paper gift box`,
    'HOÀI PHỐ ĐÊM TRĂNG':`Heritage music combined with the art of scent creates a complete healing therapy for all the senses. The “Moonlit Nostalgic Street” scented candle carries the luxurious breath of the ancient capital’s festivals, spreading the warmth of fresh ginger and the sweetness of ripe tangerine, intertwined with magnolia and lingering amber. This scent stimulates the senses and quickly brings warm energy and emotional balance.
The image of artists performing Huế Royal Court Music in traditional costumes honours the nation’s intangible cultural heritage, bringing ancient art into modern life.
SCENT NOTES
Top notes: Fragrant tangerine, warm ginger
Middle notes: Magnolia, light cinnamon
Base notes: Amber, cedar
EACH SET INCLUDES
Premium soy wax candle jar (180g)
Card with a QR code to a healing music playlist (Huế Royal Court Music)
Packed in a neat, eco-friendly paper gift box`,
    'SÀI GÒN GIÓ MÁT':`Saigon – the city that never sleeps – is always generous, open and full of life for anyone who sets foot in it. The “Saigon Cool Breeze” scented candle recreates a Saigon all of its own: the rich, awakening note of iced milk coffee on a morning street corner, blended with the sweet-sour taste of fresh kumquat and plumeria blooming in the late afternoon sun. The scent awakens creative energy and sparks enthusiasm for work.
The image of the old Bến Thành Market meeting the modern Bitexco Tower rising high expresses a spirit that cherishes memories yet is always ready to reach out to the world.
SCENT NOTES
Top notes: Night-blooming cactus flower, refreshing river breeze
Middle notes: Street-corner plumeria, iced milk coffee
Base notes: Light musk, modern juniper
EACH SET INCLUDES
Premium soy wax candle jar (180g)
Card with a QR code to a healing music playlist (Đàn sến & concave-fretboard guitar of the South)
Packed in a neat, eco-friendly paper gift box`,
    'NẮNG MỚI MIỀN TÂY':`The Mekong Delta shows itself through its bountiful heart, its generosity and its warm, sincere people. The “New Sunshine of the Mekong Delta” scented candle takes you to the land of rivers in the South, immersed in the refreshing sweetness of fresh soursop, the rustic, lightly creamy note of coconut blossom and the cool breeze brushing past morning-dewed bồn bồn stalks. The scent washes away all worries and brings freedom, freshness and abundant vitality.
The symbols of the đàn kìm, the conical hat, the checkered krama scarf and a colourful boat on the water express the simple, humble and bountiful character of the alluvial land.
SCENT NOTES
Top notes: Fresh soursop, dewy bồn bồn
Middle notes: Pure coconut blossom, ripe rice
Base notes: Coconut syrup, southern mangrove wood
EACH SET INCLUDES
Premium soy wax candle jar (180g)
Card with a QR code to a healing music playlist (Đàn kìm & orchard waterways)
Packed in a neat, eco-friendly paper gift box`
  };
  const norm=x=>String(x||'').trim().toUpperCase();
  const DESCN={};for(const k in DESC)DESCN[norm(k)]=DESC[k];


  function tr(s){
    const k=String(s).trim();
    if(!k)return s;
    let r=EN[k];
    if(r===undefined){
      for(const [re,to] of PAT){if(re.test(k)){r=k.replace(re,to);break}}
    }
    return r===undefined?s:String(s).replace(k,()=>r);
  }
  const t=s=>lang==='en'?tr(s):s;
  const desc=(name,vi)=>lang==='en'&&DESCN[norm(name)]?DESCN[norm(name)]:vi;

  const textOrig=new WeakMap(),attrOrig=new WeakMap();
  const ATTRS=['aria-label','title','placeholder','alt'];
  const skip=el=>el&&el.closest&&el.closest('[data-noi18n],script,style');

  function apply(root){
    root=root||document.body;
    const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let n;
    while((n=w.nextNode())){
      if(skip(n.parentElement))continue;
      if(!textOrig.has(n))textOrig.set(n,n.nodeValue);
      const o=textOrig.get(n),v=lang==='en'?tr(o):o;
      if(n.nodeValue!==v)n.nodeValue=v;
    }
    root.querySelectorAll(ATTRS.map(a=>'['+a+']').join(',')).forEach(el=>{
      if(skip(el))return;
      let m=attrOrig.get(el);
      if(!m){m={};attrOrig.set(el,m)}
      ATTRS.forEach(a=>{
        if(!el.hasAttribute(a))return;
        if(!(a in m))m[a]=el.getAttribute(a);
        const v=lang==='en'?tr(m[a]):m[a];
        if(el.getAttribute(a)!==v)el.setAttribute(a,v);
      });
    });
  }

  function setLang(l,after){
    lang=l==='en'?'en':'vi';
    try{localStorage.setItem('nanhLang',lang)}catch(e){}
    document.documentElement.lang=lang;
    apply();
    document.querySelectorAll('.flag').forEach(b=>{
      const on=b.dataset.l===lang;
      b.classList.toggle('on',on);
      b.setAttribute('aria-pressed',String(on));
    });
    if(after)after();
  }

  return{t,desc,apply,setLang,get lang(){return lang}};
})();
const t=I18N.t;
