function parsePairs(source) {
  return source
    .trim()
    .split("\n")
    .map((line) => {
      const [word, meaning] = line.split("|");
      return { word: word.trim(), meaning: meaning.trim() };
    });
}

const topicDefinitions = [
  {
    icon: "☀️",
    title: "Chào buổi sáng",
    label: "BUỔI SÁNG",
    color: "#bfeeff",
    emojis: ["☀️", "🌤️", "🛏️", "🪥", "🥣"],
    terms: parsePairs(`
morning|buổi sáng
wake up|thức dậy
sun|mặt trời
sunshine|ánh nắng
bed|giường
pillow|gối
blanket|chăn
sleepy|buồn ngủ
awake|đã thức
stretch|vươn vai
yawn|ngáp
window|cửa sổ
curtain|rèm cửa
light|ánh sáng
face|khuôn mặt
eyes|đôi mắt
nose|mũi
mouth|miệng
tooth|răng
toothbrush|bàn chải
toothpaste|kem đánh răng
wash|rửa
water|nước
towel|khăn
clean|sạch
shirt|áo
pants|quần
socks|tất
shoes|giày
comb|lược
hair|tóc
breakfast|bữa sáng
milk|sữa
bread|bánh mì
egg|trứng
bowl|bát
spoon|thìa
cup|cốc
hungry|đói
ready|sẵn sàng
hello|xin chào
smile|mỉm cười
hug|ôm
kiss|hôn
happy|vui vẻ
today|hôm nay
outside|bên ngoài
bird|chim
flower|hoa
let's go|mình đi thôi
`),
  },
  {
    icon: "🥣",
    title: "Giờ ăn",
    label: "GIỜ ĂN",
    color: "#fff09c",
    emojis: ["🥣", "🍌", "🥛", "🥄", "🍓"],
    terms: parsePairs(`
meal|bữa ăn
breakfast|bữa sáng
lunch|bữa trưa
dinner|bữa tối
snack|bữa phụ
hungry|đói
thirsty|khát
yummy|ngon
delicious|ngon miệng
hot|nóng
warm|ấm
cold|lạnh
sweet|ngọt
salty|mặn
soft|mềm
crunchy|giòn
rice|cơm
porridge|cháo
soup|canh
noodles|mì
bread|bánh mì
egg|trứng
meat|thịt
fish|cá
chicken|thịt gà
vegetable|rau
carrot|cà rốt
potato|khoai tây
fruit|trái cây
banana|chuối
apple|táo
orange|cam
watermelon|dưa hấu
strawberry|dâu tây
milk|sữa
water|nước
juice|nước ép
bowl|bát
plate|đĩa
spoon|thìa
fork|nĩa
cup|cốc
bottle|bình
bib|yếm
table|bàn
chair|ghế
eat|ăn
drink|uống
chew|nhai
more|thêm nữa
`),
  },
  {
    icon: "🛁",
    title: "Tắm cho bé",
    label: "TẮM CHO BÉ",
    color: "#a8e7ff",
    emojis: ["🛁", "🫧", "🚿", "🦆", "🧴"],
    terms: parsePairs(`
bath|bồn tắm
bathroom|phòng tắm
water|nước
warm|ấm
cold|lạnh
soap|xà phòng
shampoo|dầu gội
bubble|bong bóng
foam|bọt
towel|khăn
washcloth|khăn mặt
toothbrush|bàn chải
toothpaste|kem đánh răng
comb|lược
brush|bàn chải
duck|vịt
boat|thuyền
toy|đồ chơi
cup|cốc
tap|vòi nước
shower|vòi sen
sink|bồn rửa
mirror|gương
clean|sạch
dirty|bẩn
wet|ướt
dry|khô
slippery|trơn
splash|té nước
pour|rót
wash|rửa
rinse|xả nước
wipe|lau
scrub|chà
sit|ngồi
stand|đứng
face|mặt
hair|tóc
head|đầu
ears|tai
neck|cổ
arms|cánh tay
hands|bàn tay
fingers|ngón tay
tummy|bụng
legs|chân
feet|bàn chân
toes|ngón chân
all done|xong rồi
smell good|thơm quá
`),
  },
  {
    icon: "🧸",
    title: "Đồ chơi",
    label: "ĐỒ CHƠI",
    color: "#ffc5d6",
    emojis: ["🧸", "⚽", "🧩", "🚗", "🎨"],
    terms: parsePairs(`
toy|đồ chơi
teddy bear|gấu bông
doll|búp bê
ball|quả bóng
block|khối xếp hình
puzzle|trò ghép hình
car|ô tô
truck|xe tải
train|tàu hỏa
airplane|máy bay
boat|thuyền
bicycle|xe đạp
book|sách
picture|bức tranh
crayon|bút sáp
paper|giấy
drum|trống
bell|chuông
music|âm nhạc
song|bài hát
box|hộp
basket|giỏ
stack|xếp chồng
build|xây
push|đẩy
pull|kéo
roll|lăn
throw|ném
catch|bắt
kick|đá
jump|nhảy
run|chạy
dance|nhảy múa
sing|hát
draw|vẽ
color|tô màu
open|mở
close|đóng
big|to
small|nhỏ
round|tròn
square|vuông
red|đỏ
blue|xanh dương
yellow|vàng
green|xanh lá
share|chia sẻ
take turns|lần lượt
play|chơi
tidy up|dọn đồ chơi
`),
  },
  {
    icon: "👕",
    title: "Mặc quần áo",
    label: "MẶC QUẦN ÁO",
    color: "#c7f3bd",
    emojis: ["👕", "👗", "🧦", "👟", "🧢"],
    terms: parsePairs(`
clothes|quần áo
shirt|áo
T-shirt|áo thun
blouse|áo kiểu
sweater|áo len
jacket|áo khoác
dress|váy liền
skirt|chân váy
pants|quần dài
shorts|quần ngắn
pajamas|đồ ngủ
underwear|đồ lót
diaper|bỉm
socks|tất
shoes|giày
sandals|dép quai
slippers|dép đi trong nhà
hat|mũ
cap|mũ lưỡi trai
scarf|khăn quàng
gloves|găng tay
button|cúc áo
zipper|khóa kéo
pocket|túi áo
sleeve|tay áo
collar|cổ áo
size|kích cỡ
color|màu sắc
soft|mềm
warm|ấm
cool|mát
clean|sạch
dirty|bẩn
wet|ướt
dry|khô
put on|mặc vào
take off|cởi ra
pull up|kéo lên
pull down|kéo xuống
button up|cài cúc
zip up|kéo khóa
tie|buộc
choose|chọn
match|phối hợp
inside out|trái mặt
front|phía trước
back|phía sau
left|bên trái
right|bên phải
ready|sẵn sàng
`),
  },
  {
    icon: "🐶",
    title: "Con vật",
    label: "CON VẬT",
    color: "#ffd39b",
    emojis: ["🐶", "🐱", "🐥", "🐘", "🦋"],
    terms: parsePairs(`
animal|con vật
dog|chó
puppy|chó con
cat|mèo
kitten|mèo con
bird|chim
duck|vịt
chicken|gà
rooster|gà trống
cow|bò
pig|lợn
horse|ngựa
sheep|cừu
goat|dê
rabbit|thỏ
mouse|chuột
fish|cá
frog|ếch
turtle|rùa
butterfly|bướm
bee|ong
ant|kiến
ladybug|bọ rùa
snail|ốc sên
monkey|khỉ
elephant|voi
giraffe|hươu cao cổ
lion|sư tử
tiger|hổ
bear|gấu
panda|gấu trúc
zebra|ngựa vằn
kangaroo|chuột túi
penguin|chim cánh cụt
dolphin|cá heo
whale|cá voi
shark|cá mập
octopus|bạch tuộc
crab|cua
snake|rắn
crocodile|cá sấu
owl|cú
eagle|đại bàng
tail|đuôi
wing|cánh
fur|lông thú
feather|lông vũ
horn|sừng
farm|nông trại
zoo|sở thú
`),
  },
  {
    icon: "🥰",
    title: "Cảm xúc",
    label: "CẢM XÚC",
    color: "#ffc3ac",
    emojis: ["🥰", "😊", "😢", "😴", "🤗"],
    terms: parsePairs(`
feeling|cảm xúc
happy|vui
sad|buồn
angry|tức giận
scared|sợ
surprised|ngạc nhiên
excited|háo hức
tired|mệt
sleepy|buồn ngủ
hungry|đói
thirsty|khát
shy|ngại ngùng
brave|dũng cảm
calm|bình tĩnh
worried|lo lắng
upset|khó chịu
lonely|cô đơn
proud|tự hào
curious|tò mò
confused|bối rối
comfortable|dễ chịu
uncomfortable|khó chịu
love|yêu thương
like|thích
dislike|không thích
smile|mỉm cười
laugh|cười
cry|khóc
tear|nước mắt
hug|ôm
kiss|hôn
help|giúp đỡ
share|chia sẻ
wait|chờ
breathe|hít thở
quiet|yên tĩnh
loud|ồn
gentle|nhẹ nhàng
kind|tử tế
sorry|xin lỗi
please|làm ơn
thank you|cảm ơn
okay|ổn
better|tốt hơn
safe|an toàn
hurt|đau
miss|nhớ
want|muốn
need|cần
together|cùng nhau
`),
  },
  {
    icon: "🌙",
    title: "Giờ đi ngủ",
    label: "GIỜ ĐI NGỦ",
    color: "#c9c8ff",
    emojis: ["🌙", "⭐", "🛏️", "📖", "😴"],
    terms: parsePairs(`
bedtime|giờ đi ngủ
night|ban đêm
moon|mặt trăng
star|ngôi sao
sky|bầu trời
dark|tối
quiet|yên tĩnh
sleep|ngủ
sleepy|buồn ngủ
dream|giấc mơ
bed|giường
pillow|gối
blanket|chăn
sheet|ga giường
pajamas|đồ ngủ
night-light|đèn ngủ
lamp|đèn
curtain|rèm
window|cửa sổ
door|cửa
book|sách
story|câu chuyện
song|bài hát
lullaby|bài hát ru
milk|sữa
bottle|bình sữa
toothbrush|bàn chải
toothpaste|kem đánh răng
bath|tắm
towel|khăn
clean|sạch
soft|mềm
warm|ấm
cozy|ấm cúng
teddy bear|gấu bông
toy|đồ chơi
yawn|ngáp
close|nhắm
eyes|mắt
lie down|nằm xuống
turn over|trở mình
tuck in|đắp chăn
hug|ôm
kiss|hôn
good night|chúc ngủ ngon
sweet dreams|mơ đẹp
see you tomorrow|hẹn mai gặp
rest|nghỉ ngơi
safe|an toàn
love you|yêu con
`),
  },
];

const practicalExamples = [
  parsePairs(`
Good morning, Sunny!|Chào buổi sáng, Sunny!
It's time to wake up, sweetheart.|Đến giờ thức dậy rồi con yêu.
The sun is up.|Mặt trời lên rồi kìa.
Look at the warm sunshine.|Con nhìn ánh nắng ấm áp này.
Let's get out of bed.|Mình ra khỏi giường nhé.
Put your head on the pillow.|Con đặt đầu lên gối nhé.
Mommy will fold the blanket.|Mẹ sẽ gấp chăn lại.
Are you still sleepy?|Con vẫn còn buồn ngủ à?
Sunny is awake now!|Sunny thức rồi này!
Stretch your arms up high.|Con vươn hai tay lên cao nào.
That was a big yawn!|Con ngáp một cái thật to!
Let's open the window.|Mẹ con mình mở cửa sổ nhé.
Mommy will pull back the curtain.|Mẹ kéo rèm ra nhé.
Please turn on the light.|Con bật đèn giúp mẹ nhé.
Let Mommy wash your face.|Mẹ rửa mặt cho con nhé.
Open your eyes, sweetheart.|Con mở mắt ra nào.
Let Mommy wipe your nose.|Mẹ lau mũi cho con nhé.
Open your mouth, please.|Con há miệng ra nào.
Let Mommy brush your teeth.|Mẹ đánh răng cho con nhé.
Here is your toothbrush.|Bàn chải của con đây.
We only need a little toothpaste.|Mình chỉ cần một chút kem đánh răng thôi.
Let's wash your hands.|Mình rửa tay nhé.
The water feels nice and warm.|Nước ấm thật dễ chịu.
Let Mommy dry you with the towel.|Mẹ lau khô cho con bằng khăn nhé.
Your face is nice and clean.|Mặt con sạch sẽ rồi.
Which shirt do you want today?|Hôm nay con muốn mặc áo nào?
Let's put on your pants.|Mình mặc quần vào nhé.
Where are your socks?|Tất của con đâu rồi nhỉ?
Let's put on your shoes.|Mình đi giày vào nhé.
Mommy will comb your hair.|Mẹ chải tóc cho con nhé.
Your hair looks so pretty.|Tóc con trông xinh quá.
Breakfast is ready!|Bữa sáng sẵn sàng rồi!
Would you like some milk?|Con có muốn uống sữa không?
Here is a piece of bread.|Con ăn một miếng bánh mì nhé.
Would you like an egg?|Con có muốn ăn trứng không?
Your breakfast is in the bowl.|Bữa sáng của con ở trong bát này.
Hold your spoon carefully.|Con cầm thìa cẩn thận nhé.
Drink from your cup, please.|Con uống bằng cốc nhé.
Are you hungry, Sunny?|Sunny có đói không?
Are you ready to go out?|Con sẵn sàng đi ra ngoài chưa?
Say hello to Grandma.|Con chào bà đi nào.
Give Mommy a big smile.|Con cười thật tươi với mẹ nào.
Come here for a hug.|Lại đây mẹ ôm một cái nào.
Give Mommy a kiss.|Con thơm mẹ một cái nhé.
You look so happy today.|Hôm nay trông con vui quá.
What shall we do today?|Hôm nay mẹ con mình làm gì nhỉ?
Let's go outside.|Mình ra ngoài chơi nhé.
Can you hear the bird?|Con có nghe thấy tiếng chim không?
Look at the pretty flower.|Con nhìn bông hoa xinh này.
Let's go, Sunny!|Mình đi thôi, Sunny!
`),
  parsePairs(`
It's time for our meal.|Đến giờ ăn rồi.
Let's have breakfast together.|Mẹ con mình cùng ăn sáng nhé.
Lunch is ready, Sunny.|Bữa trưa sẵn sàng rồi, Sunny.
Let's have dinner with Daddy.|Mình ăn tối cùng bố nhé.
Would you like a little snack?|Con có muốn ăn bữa phụ không?
Are you hungry?|Con có đói không?
Are you thirsty?|Con có khát không?
Is it yummy?|Có ngon không con?
This looks delicious!|Món này trông ngon quá!
Careful, the food is hot.|Cẩn thận nhé, thức ăn nóng đấy.
The soup is warm now.|Canh ấm rồi con nhé.
The milk is still cold.|Sữa vẫn còn lạnh.
This banana is sweet.|Quả chuối này ngọt lắm.
The soup is a little salty.|Canh hơi mặn một chút.
The porridge is nice and soft.|Cháo mềm ngon lắm.
Listen to the crunchy sound!|Con nghe tiếng giòn rụm này!
Would you like some rice?|Con có muốn ăn cơm không?
Mommy made porridge for you.|Mẹ nấu cháo cho con này.
Blow on the soup first.|Con thổi canh trước nhé.
Let's eat some noodles.|Mình ăn mì nhé.
Take a small bite of bread.|Con cắn một miếng bánh mì nhỏ nhé.
Do you want some egg?|Con có muốn ăn trứng không?
Chew the meat slowly.|Con nhai thịt từ từ nhé.
Here is some fish for you.|Cá của con đây.
Would you like more chicken?|Con có muốn ăn thêm thịt gà không?
Let's eat some vegetables.|Mình ăn một chút rau nhé.
Try a little carrot.|Con thử một miếng cà rốt nhé.
This potato is very soft.|Khoai tây này mềm lắm.
Which fruit would you like?|Con muốn ăn loại trái cây nào?
Mommy will peel the banana.|Mẹ bóc chuối cho con nhé.
Would you like an apple slice?|Con có muốn ăn một miếng táo không?
Let's peel the orange together.|Mẹ con mình cùng bóc cam nhé.
This watermelon is juicy.|Dưa hấu này nhiều nước quá.
Here is a strawberry for you.|Dâu tây của con đây.
Drink your milk, sweetheart.|Con uống sữa nhé.
Would you like some water?|Con có muốn uống nước không?
Mommy made fresh juice.|Mẹ làm nước ép tươi này.
Put the food in your bowl.|Con cho thức ăn vào bát nhé.
Your food is on the plate.|Đồ ăn của con ở trên đĩa.
Use your spoon, please.|Con dùng thìa nhé.
Mommy will help you with the fork.|Mẹ giúp con dùng nĩa nhé.
Hold your cup with both hands.|Con cầm cốc bằng hai tay nhé.
Here is your bottle.|Bình của con đây.
Let's put on your bib.|Mình đeo yếm vào nhé.
Please sit at the table.|Con ngồi vào bàn nhé.
Sit nicely in your chair.|Con ngồi ngay ngắn trên ghế nhé.
Let's eat together.|Mẹ con mình cùng ăn nhé.
Take a sip of water.|Con uống một ngụm nước nhé.
Chew your food well.|Con nhai kỹ thức ăn nhé.
Would you like some more?|Con có muốn thêm nữa không?
`),
  parsePairs(`
It's bath time, Sunny!|Đến giờ tắm rồi, Sunny!
Let's go to the bathroom.|Mình vào phòng tắm nhé.
Mommy is filling the tub with water.|Mẹ đang cho nước vào bồn.
The water is nice and warm.|Nước ấm vừa đẹp rồi.
Is the water too cold?|Nước có lạnh quá không con?
Mommy will wash you with soap.|Mẹ tắm cho con bằng xà phòng nhé.
Let's wash your hair with shampoo.|Mình gội đầu bằng dầu gội nhé.
Look at all the bubbles!|Con nhìn nhiều bong bóng này!
You have foam on your nose.|Mũi con dính bọt kìa.
Your towel is ready.|Khăn của con sẵn sàng rồi.
Mommy will wipe your face gently.|Mẹ lau mặt nhẹ nhàng cho con nhé.
We'll brush your teeth after the bath.|Tắm xong mình sẽ đánh răng nhé.
Just a little toothpaste, please.|Mình lấy một chút kem đánh răng thôi.
Mommy will comb your hair later.|Lát nữa mẹ chải tóc cho con nhé.
Let's brush your hair gently.|Mình chải tóc nhẹ nhàng nhé.
The little duck is swimming.|Chú vịt nhỏ đang bơi kìa.
Can your boat float?|Thuyền của con có nổi không?
Which bath toy do you want?|Con muốn chơi đồ chơi tắm nào?
Pour the water with the cup.|Con dùng cốc rót nước nhé.
Mommy will turn off the tap.|Mẹ tắt vòi nước nhé.
Stand under the shower with Mommy.|Con đứng dưới vòi sen với mẹ nhé.
Let's wash our hands at the sink.|Mình rửa tay ở bồn nhé.
Can you see yourself in the mirror?|Con nhìn thấy mình trong gương không?
Now you are all clean!|Bây giờ con sạch sẽ rồi!
Your feet were so dirty.|Chân con vừa nãy bẩn quá.
Your hair is all wet.|Tóc con ướt hết rồi.
Mommy will dry your hair.|Mẹ lau khô tóc cho con nhé.
Careful, the floor is slippery.|Cẩn thận nhé, sàn trơn đấy.
Let's splash the water gently.|Mình té nước nhẹ thôi nhé.
Pour the water into the cup.|Con rót nước vào cốc nhé.
Let Mommy wash your tummy.|Mẹ rửa bụng cho con nhé.
Let's rinse off the soap.|Mình xả sạch xà phòng nhé.
Mommy will wipe your ears.|Mẹ lau tai cho con nhé.
Let's scrub your little feet.|Mình chà bàn chân nhỏ nhé.
Sit down in the tub, please.|Con ngồi xuống bồn nhé.
Stand up slowly.|Con đứng lên từ từ nhé.
Let Mommy wash your face.|Mẹ rửa mặt cho con nhé.
Close your eyes while Mommy washes your hair.|Con nhắm mắt khi mẹ gội đầu nhé.
Let's wash the top of your head.|Mình gội phần trên đầu nhé.
Mommy will clean behind your ears.|Mẹ rửa phía sau tai nhé.
Let's wash your neck.|Mình rửa cổ nhé.
Lift your arms up.|Con giơ hai tay lên nào.
Rub your hands together.|Con xoa hai bàn tay vào nhau nhé.
Let's clean between your fingers.|Mình rửa kẽ ngón tay nhé.
Mommy will wash your tummy.|Mẹ rửa bụng cho con nhé.
Let's wash both legs.|Mình rửa hai chân nhé.
Give Mommy your little feet.|Đưa hai bàn chân nhỏ cho mẹ nào.
Let's count your toes.|Mình đếm các ngón chân nhé.
All done! Bath time is over.|Xong rồi! Giờ tắm kết thúc nhé.
You smell so good!|Con thơm quá!
`),
  parsePairs(`
Which toy do you want to play with?|Con muốn chơi đồ chơi nào?
Give your teddy bear a hug.|Con ôm gấu bông một cái nhé.
Let's put the doll to bed.|Mình cho búp bê đi ngủ nhé.
Do you want to play with the ball?|Con có muốn chơi bóng không?
Let's build a tower with the blocks.|Mình xây tháp bằng khối gỗ nhé.
Can you finish this puzzle?|Con ghép xong bức hình này được không?
Push the car to Mommy.|Con đẩy ô tô về phía mẹ nhé.
The truck is carrying the blocks.|Xe tải đang chở các khối gỗ.
Here comes the train!|Tàu hỏa đến rồi!
The airplane is flying high.|Máy bay đang bay cao kìa.
Let's put the boat in the water.|Mình thả thuyền xuống nước nhé.
Would you like to ride your bicycle?|Con có muốn đi xe đạp không?
Choose a book for Mommy to read.|Con chọn một cuốn sách để mẹ đọc nhé.
Can you find the dog in the picture?|Con tìm chú chó trong tranh được không?
Let's draw with the crayons.|Mình vẽ bằng bút sáp nhé.
Draw a circle on the paper.|Con vẽ một hình tròn trên giấy nhé.
Can you tap the drum?|Con gõ trống được không?
Ring the little bell.|Con rung chiếc chuông nhỏ nhé.
Let's listen to some music.|Mình nghe nhạc nhé.
Shall we sing this song together?|Mẹ con mình cùng hát bài này nhé?
Put the toys in the box.|Con cho đồ chơi vào hộp nhé.
Let's carry the basket together.|Mẹ con mình cùng bê giỏ nhé.
Can you stack the blocks?|Con xếp chồng các khối gỗ được không?
Let's build a little house.|Mình xây một ngôi nhà nhỏ nhé.
Push the train along the track.|Con đẩy tàu dọc theo đường ray nhé.
Pull the toy toward you.|Con kéo đồ chơi về phía mình nhé.
Roll the ball to Mommy.|Con lăn bóng cho mẹ nhé.
Throw the ball gently.|Con ném bóng nhẹ thôi nhé.
Catch the ball, Sunny!|Sunny bắt bóng này!
Kick the ball to Daddy.|Con đá bóng cho bố nhé.
Can you jump over the line?|Con nhảy qua vạch được không?
Let's run to the door.|Mình chạy đến cửa nhé.
Dance with Mommy!|Con nhảy cùng mẹ nhé!
Sing your favorite song.|Con hát bài con thích nhé.
Let's draw a flower.|Mình vẽ một bông hoa nhé.
Which color do you want?|Con muốn tô màu nào?
Open the toy box, please.|Con mở hộp đồ chơi nhé.
Close the book gently.|Con đóng sách nhẹ nhàng nhé.
Can you find the big ball?|Con tìm quả bóng to được không?
Give Mommy the small block.|Con đưa mẹ khối gỗ nhỏ nhé.
This ball is round.|Quả bóng này tròn.
This block is square.|Khối gỗ này hình vuông.
Can you find something red?|Con tìm đồ vật màu đỏ được không?
Where is the blue car?|Ô tô màu xanh dương đâu rồi?
Pick up the yellow block.|Con nhặt khối gỗ màu vàng nhé.
Let's build with the green blocks.|Mình xây bằng các khối màu xanh lá nhé.
Let's share the toys.|Mẹ con mình cùng chia sẻ đồ chơi nhé.
It's Mommy's turn, then Sunny's turn.|Đến lượt mẹ, rồi đến lượt Sunny nhé.
Let's play together.|Mẹ con mình cùng chơi nhé.
It's time to tidy up the toys.|Đến giờ dọn đồ chơi rồi.
`),
  parsePairs(`
Let's choose your clothes.|Mình chọn quần áo cho con nhé.
Put your arms into the shirt.|Con luồn tay vào áo nhé.
Do you want to wear this T-shirt?|Con có muốn mặc áo thun này không?
This blouse looks pretty on you.|Con mặc áo này xinh quá.
Wear your sweater; it's chilly.|Con mặc áo len nhé, trời hơi lạnh.
Let's put on your jacket.|Mình mặc áo khoác vào nhé.
Would you like to wear the pink dress?|Con có muốn mặc váy hồng không?
This skirt can twirl!|Chiếc váy này xoay đẹp lắm!
Put one leg into your pants.|Con cho một chân vào quần nhé.
Let's wear shorts today.|Hôm nay mình mặc quần ngắn nhé.
It's time to put on your pajamas.|Đến giờ mặc đồ ngủ rồi.
Mommy will get your underwear.|Mẹ lấy đồ lót cho con nhé.
Let's change your diaper.|Mẹ thay bỉm cho con nhé.
Where is your other sock?|Chiếc tất còn lại của con đâu?
Let's put on your shoes.|Mình đi giày vào nhé.
These sandals are easy to wear.|Đôi dép quai này dễ đi lắm.
Put on your slippers indoors.|Con đi dép trong nhà nhé.
Wear your hat in the sun.|Con đội mũ khi ra nắng nhé.
Do you want the red cap?|Con có muốn đội mũ đỏ không?
Let's wrap the scarf around your neck.|Mình quàng khăn quanh cổ nhé.
Put on your gloves; your hands are cold.|Con đeo găng nhé, tay con lạnh rồi.
Mommy will fasten the buttons.|Mẹ cài cúc cho con nhé.
Let's pull up the zipper.|Mình kéo khóa lên nhé.
Put your little toy in the pocket.|Con cho đồ chơi nhỏ vào túi nhé.
Your hand is stuck in the sleeve.|Tay con mắc trong tay áo rồi.
Mommy will fix your collar.|Mẹ chỉnh cổ áo cho con nhé.
Is this the right size?|Bộ này có vừa với con không?
Which color do you like?|Con thích màu nào?
This shirt feels soft.|Áo này mềm thật đấy.
This jacket will keep you warm.|Áo khoác này sẽ giữ ấm cho con.
This dress will keep you cool.|Váy này mặc sẽ mát.
Here are your clean clothes.|Quần áo sạch của con đây.
Let's put the dirty clothes in the basket.|Mình cho quần áo bẩn vào giỏ nhé.
Your socks are wet.|Tất của con bị ướt rồi.
These clothes are dry now.|Quần áo khô rồi.
Let Mommy put your shirt on.|Mẹ mặc áo cho con nhé.
Shall we take off your jacket?|Mình cởi áo khoác nhé?
Pull your pants up, please.|Con kéo quần lên nhé.
Mommy will pull your socks down.|Mẹ kéo tất xuống nhé.
Let's button up your shirt.|Mình cài cúc áo nhé.
Can you zip up your jacket?|Con kéo khóa áo được không?
Mommy will tie your shoelaces.|Mẹ buộc dây giày cho con nhé.
Choose what you want to wear.|Con chọn bộ con muốn mặc nhé.
These socks match your shirt.|Đôi tất này hợp với áo của con.
Your shirt is inside out.|Áo của con đang bị trái mặt.
The picture goes in the front.|Hình này ở phía trước nhé.
The zipper goes at the back.|Khóa kéo ở phía sau nhé.
Give Mommy your left foot.|Con đưa chân trái cho mẹ nhé.
Now give Mommy your right foot.|Bây giờ đưa chân phải cho mẹ nhé.
You're dressed and ready!|Con mặc xong và sẵn sàng rồi!
`),
  parsePairs(`
Can you see the animal?|Con có nhìn thấy con vật không?
The dog is wagging its tail.|Chú chó đang vẫy đuôi kìa.
Look at the little puppy!|Con nhìn chú chó con này!
The cat says meow.|Chú mèo kêu meo meo.
The kitten is drinking milk.|Mèo con đang uống sữa.
Can you hear the bird singing?|Con có nghe chim hót không?
The duck is swimming in the pond.|Chú vịt đang bơi trong ao.
The chicken is looking for food.|Chú gà đang tìm thức ăn.
The rooster says cock-a-doodle-doo.|Gà trống gáy ò ó o.
The cow gives us milk.|Bò cho chúng ta sữa.
The pig likes to roll in the mud.|Chú lợn thích lăn trong bùn.
The horse can run very fast.|Ngựa có thể chạy rất nhanh.
The sheep has soft wool.|Chú cừu có bộ lông mềm.
The goat is eating grass.|Chú dê đang ăn cỏ.
The rabbit has long ears.|Chú thỏ có đôi tai dài.
The little mouse is hiding.|Chú chuột nhỏ đang trốn.
Can you see the fish swimming?|Con thấy cá đang bơi không?
The frog can jump high.|Chú ếch có thể nhảy cao.
The turtle walks very slowly.|Chú rùa đi rất chậm.
Look at the beautiful butterfly.|Con nhìn chú bướm xinh đẹp này.
The bee is flying around the flower.|Chú ong đang bay quanh bông hoa.
The ants are walking in a line.|Đàn kiến đang đi thành hàng.
The ladybug has little spots.|Bọ rùa có những chấm nhỏ.
The snail carries its house.|Ốc sên mang ngôi nhà trên lưng.
The monkey is eating a banana.|Chú khỉ đang ăn chuối.
The elephant has a long trunk.|Chú voi có chiếc vòi dài.
The giraffe has a very long neck.|Hươu cao cổ có chiếc cổ rất dài.
The lion has a big mane.|Sư tử có chiếc bờm lớn.
The tiger has black stripes.|Hổ có những sọc màu đen.
The bear is big and strong.|Chú gấu to và khỏe.
The panda loves bamboo.|Gấu trúc rất thích tre.
The zebra has black and white stripes.|Ngựa vằn có sọc đen trắng.
The kangaroo carries its baby in a pouch.|Chuột túi mang con trong chiếc túi.
The penguin walks with a funny waddle.|Chim cánh cụt đi lạch bạch thật vui.
The dolphin is jumping out of the water.|Cá heo đang nhảy khỏi mặt nước.
The whale is very big.|Cá voi rất to.
The shark has many sharp teeth.|Cá mập có nhiều răng sắc.
The octopus has eight arms.|Bạch tuộc có tám xúc tu.
The crab walks sideways.|Chú cua đi ngang.
The snake has no legs.|Con rắn không có chân.
The crocodile has a long mouth.|Cá sấu có chiếc miệng dài.
The owl is awake at night.|Chim cú thức vào ban đêm.
The eagle is flying high in the sky.|Đại bàng đang bay cao trên trời.
Can you find the dog's tail?|Con tìm đuôi chú chó được không?
The bird is flapping its wings.|Chú chim đang vỗ cánh.
The cat's fur is very soft.|Lông mèo mềm lắm.
We found a feather on the ground.|Mình tìm thấy một chiếc lông vũ dưới đất.
The goat has two horns.|Chú dê có hai chiếc sừng.
Let's visit the animals on the farm.|Mình đi thăm các con vật ở nông trại nhé.
Which animal do you want to see at the zoo?|Con muốn xem con vật nào ở sở thú?
`),
  parsePairs(`
How are you feeling, Sunny?|Sunny đang cảm thấy thế nào?
You look very happy today.|Hôm nay trông con rất vui.
Are you feeling sad?|Con đang buồn à?
I know you're angry.|Mẹ biết con đang tức giận.
Are you scared of the loud sound?|Con có sợ tiếng động lớn không?
What a lovely surprise!|Thật là một bất ngờ đáng yêu!
Are you excited to go outside?|Con có háo hức ra ngoài không?
You look tired; let's take a break.|Con có vẻ mệt, mình nghỉ một chút nhé.
Are you sleepy, sweetheart?|Con buồn ngủ rồi phải không?
Are you hungry?|Con có đói không?
Would you like some water?|Con có muốn uống nước không?
It's okay to feel shy.|Con ngại một chút cũng không sao.
You were very brave.|Con đã rất dũng cảm.
Take a deep breath and stay calm.|Con hít sâu và bình tĩnh nhé.
Mommy is here; don't worry.|Mẹ ở đây rồi, con đừng lo.
I know you're upset.|Mẹ biết con đang khó chịu.
You are not alone; Mommy is here.|Con không một mình đâu, mẹ ở đây.
Mommy is so proud of you.|Mẹ rất tự hào về con.
Are you curious about that sound?|Con tò mò về âm thanh đó à?
It's okay if you feel confused.|Con thấy bối rối cũng không sao.
Are you comfortable here?|Con có thấy dễ chịu ở đây không?
Is this making you uncomfortable?|Điều này có làm con khó chịu không?
Mommy loves you so much.|Mẹ yêu con rất nhiều.
Do you like this song?|Con có thích bài hát này không?
You don't have to eat it if you dislike it.|Nếu không thích thì con không cần ăn đâu.
Give Mommy a big smile.|Con cười thật tươi với mẹ nào.
Your laugh makes Mommy happy.|Tiếng cười của con làm mẹ vui.
It's okay to cry.|Con khóc cũng không sao.
Let Mommy wipe your tears.|Mẹ lau nước mắt cho con nhé.
Come here for a hug.|Lại đây mẹ ôm một cái nào.
Give Mommy a kiss.|Con thơm mẹ một cái nhé.
Do you need Mommy's help?|Con có cần mẹ giúp không?
Let's share with your friend.|Mình chia sẻ với bạn nhé.
Please wait for a moment.|Con chờ một chút nhé.
Let's breathe in and out slowly.|Mình hít vào và thở ra từ từ nhé.
Let's use our quiet voice.|Mình nói nhỏ thôi nhé.
That sound is too loud.|Âm thanh đó to quá.
Be gentle with the baby.|Con nhẹ nhàng với em nhé.
That was very kind of you.|Con làm như vậy thật tử tế.
Say sorry to your friend, please.|Con xin lỗi bạn nhé.
Please give Mommy the toy.|Con làm ơn đưa đồ chơi cho mẹ nhé.
Say thank you to Grandma.|Con cảm ơn bà nhé.
Everything is okay now.|Bây giờ mọi chuyện ổn rồi.
Do you feel better now?|Bây giờ con thấy tốt hơn chưa?
You are safe with Mommy.|Ở bên mẹ con được an toàn.
Show Mommy where it hurts.|Con chỉ cho mẹ chỗ bị đau nhé.
Did you miss Mommy?|Con có nhớ mẹ không?
What do you want, Sunny?|Sunny muốn gì nào?
Tell Mommy what you need.|Con nói cho mẹ biết con cần gì nhé.
We can do it together.|Mẹ con mình có thể cùng làm.
`),
  parsePairs(`
It's bedtime, Sunny.|Đến giờ đi ngủ rồi, Sunny.
Good night, my love.|Chúc con ngủ ngon, con yêu.
Look at the moon outside.|Con nhìn mặt trăng ngoài kia.
Can you see the little stars?|Con có thấy những ngôi sao nhỏ không?
The sky is dark now.|Bầu trời tối rồi.
Let's turn off the light.|Mình tắt đèn nhé.
The house is nice and quiet.|Ngôi nhà thật yên tĩnh.
It's time to sleep.|Đến giờ ngủ rồi.
Are you feeling sleepy?|Con thấy buồn ngủ chưa?
What will you dream about tonight?|Tối nay con sẽ mơ gì nhỉ?
Let's get into bed.|Mình lên giường nhé.
Put your head on the pillow.|Con đặt đầu lên gối nhé.
Mommy will cover you with the blanket.|Mẹ đắp chăn cho con nhé.
Mommy will straighten the sheet.|Mẹ chỉnh lại ga giường nhé.
Let's put on your pajamas.|Mình mặc đồ ngủ nhé.
Shall we turn on the night-light?|Mình bật đèn ngủ nhé?
Mommy will turn off the lamp.|Mẹ tắt đèn nhé.
Let's close the curtain.|Mình kéo rèm lại nhé.
Mommy will close the window.|Mẹ đóng cửa sổ nhé.
Let's leave the door a little open.|Mình để cửa hé một chút nhé.
Choose a book for bedtime.|Con chọn một cuốn sách để đọc trước khi ngủ nhé.
Mommy will tell you a story.|Mẹ kể chuyện cho con nghe nhé.
Would you like one more song?|Con có muốn nghe thêm một bài hát không?
Mommy will sing you a lullaby.|Mẹ hát ru cho con nhé.
Would you like some milk before bed?|Con có muốn uống sữa trước khi ngủ không?
Mommy will put your bottle here.|Mẹ đặt bình sữa ở đây nhé.
Let's brush your teeth before bed.|Mình đánh răng trước khi ngủ nhé.
We only need a little toothpaste.|Mình chỉ cần một chút kem đánh răng thôi.
Let's take a warm bath first.|Mình tắm nước ấm trước nhé.
Mommy will dry you with the towel.|Mẹ lau khô cho con bằng khăn nhé.
Now you are nice and clean.|Bây giờ con sạch sẽ rồi.
Your pillow is soft.|Gối của con mềm lắm.
The blanket will keep you warm.|Chăn sẽ giữ ấm cho con.
Your bed is so cozy.|Giường của con thật ấm cúng.
Do you want your teddy bear?|Con có muốn ôm gấu bông không?
Let's put the toys away for the night.|Mình cất đồ chơi để đi ngủ nhé.
That was a big yawn.|Con vừa ngáp thật to.
Close your eyes, sweetheart.|Con nhắm mắt lại nhé.
Mommy can see your sleepy eyes.|Mẹ thấy đôi mắt buồn ngủ của con rồi.
Lie down next to Mommy.|Con nằm xuống bên cạnh mẹ nhé.
Turn over carefully.|Con trở mình nhẹ nhàng nhé.
Mommy will tuck you in.|Mẹ đắp chăn gọn cho con nhé.
One more hug before sleep.|Ôm thêm một cái trước khi ngủ nhé.
Give Mommy a good-night kiss.|Con thơm mẹ chúc ngủ ngon nhé.
Good night, Sunny.|Chúc Sunny ngủ ngon.
Sweet dreams, my love.|Chúc con yêu mơ đẹp.
See you tomorrow morning.|Hẹn gặp con vào sáng mai.
Your body needs to rest now.|Cơ thể con cần nghỉ ngơi rồi.
You are safe here with Mommy.|Ở đây bên mẹ con được an toàn.
Mommy loves you.|Mẹ yêu con.
`),
];

const topics = topicDefinitions.map((topic) => ({
  ...topic,
  count: "50 từ · 50 câu",
  items: topic.terms.map((term, index) => {
    const sentence = practicalExamples[topicDefinitions.indexOf(topic)][index];
    return {
      ...term,
      emoji: topic.emojis[index % topic.emojis.length],
      phonetic: "Bấm ♪ để nghe giọng Anh chậm, rõ",
      example: sentence.word,
      exampleVi: sentence.meaning,
    };
  }),
}));

const topicGrid = document.querySelector("#topicGrid");
const dialog = document.querySelector("#lessonDialog");
const flashcard = document.querySelector("#flashcard");
const quizCard = document.querySelector("#quizCard");
const completeCard = document.querySelector("#completeCard");
const nextButton = document.querySelector("#nextWord");
const previousButton = document.querySelector("#previousWord");
const toast = document.querySelector("#toast");

let currentTopicIndex = 0;
let currentIndex = 0;
let stage = "words";
let selectedEnglishVoice = null;
const savedProgress = JSON.parse(localStorage.getItem("sunny-english-progress") || "{}");

function chooseEnglishVoice() {
  if (!("speechSynthesis" in window)) return null;

  const voices = window.speechSynthesis.getVoices();
  const englishVoices = voices.filter((voice) => /^en([-_]|$)/i.test(voice.lang || ""));

  selectedEnglishVoice =
    englishVoices.find((voice) => /google us english/i.test(voice.name)) ||
    englishVoices.find((voice) => /samantha|alex|jenny|aria|natural/i.test(voice.name)) ||
    englishVoices.find((voice) => /^en[-_]US/i.test(voice.lang || "")) ||
    englishVoices.find((voice) => /^en[-_]GB/i.test(voice.lang || "")) ||
    englishVoices[0] ||
    null;

  return selectedEnglishVoice;
}

function prepareEnglishVoice() {
  if (!("speechSynthesis" in window)) return;
  chooseEnglishVoice();
  window.speechSynthesis.onvoiceschanged = chooseEnglishVoice;
}

function getTopicProgress(index) {
  return Math.min(Number(savedProgress[index] || 0), 50);
}

function saveTopicProgress(index, value) {
  savedProgress[index] = Math.max(getTopicProgress(index), Math.min(value, 50));
  localStorage.setItem("sunny-english-progress", JSON.stringify(savedProgress));
}

function renderTopics() {
  topicGrid.innerHTML = topics
    .map(
      (topic, index) => `
      <button class="topic-card" type="button" data-topic="${index}" aria-label="Mở chủ đề ${topic.title}">
        <span class="topic-ready">MỞ</span>
        <span class="topic-illustration" style="background:${topic.color}">${topic.icon}</span>
        <h3>${topic.title}</h3>
        <p>${topic.count}</p>
        <span class="topic-progress">${getTopicProgress(index)}/50 đã học</span>
      </button>
    `,
    )
    .join("");
}

function speak(text, options = {}) {
  if (!("speechSynthesis" in window)) {
    showToast("Trình duyệt này chưa hỗ trợ phát âm.");
    return;
  }

  const voice = selectedEnglishVoice || chooseEnglishVoice();

  if (!voice) {
    showToast("Đang tải giọng đọc tiếng Anh, mẹ bấm lại sau 1 giây nhé.");
    window.setTimeout(() => speak(text, options), 700);
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voice;
  utterance.lang = voice.lang || "en-US";
  utterance.rate = options.slow ? 0.68 : 0.76;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2300);
}

function updateHomeProgress() {
  const morningProgress = getTopicProgress(0);
  const totalWords = Object.keys(savedProgress).reduce(
    (total, key) => total + getTopicProgress(Number(key)),
    0,
  );
  document.querySelector("#progressLabel").textContent = `${morningProgress} / 50 từ`;
  document.querySelector("#progressBar").style.width = `${morningProgress * 2}%`;
  document.querySelector("#wordsLearned").textContent = totalWords;
  document.querySelector("#sentencesLearned").textContent = totalWords;
  document.querySelector("#lessonButtonText").textContent =
    morningProgress === 50
      ? "Ôn lại chủ đề"
      : morningProgress > 0
        ? "Học tiếp chủ đề"
        : "Bắt đầu chủ đề";
}

function renderWord() {
  const topic = topics[currentTopicIndex];
  const item = topic.items[currentIndex];
  document.querySelector("#modalTopicLabel").textContent =
    `CHỦ ĐỀ ${String(currentTopicIndex + 1).padStart(2, "0")} · ${topic.label}`;
  document.querySelector("#wordEmoji").textContent = item.emoji;
  document.querySelector("#englishWord").textContent = item.word;
  document.querySelector("#phonetic").textContent = item.phonetic;
  document.querySelector("#vietnameseWord").textContent = item.meaning;
  document.querySelector("#exampleSentence").textContent = item.example;
  document.querySelector("#exampleTranslation").textContent = item.exampleVi;
  document.querySelector("#modalStep").textContent = `${currentIndex + 1} / 50`;
  document.querySelector("#modalProgressBar").style.width = `${(currentIndex + 1) * 2}%`;
  previousButton.style.visibility = currentIndex === 0 ? "hidden" : "visible";
  nextButton.querySelector("span:first-child").textContent =
    currentIndex === 49 ? "Hoàn thành chủ đề" : "Đã nhớ từ này";
}

function openLesson(topicIndex = 0) {
  currentTopicIndex = Number(topicIndex);
  const progress = getTopicProgress(currentTopicIndex);
  currentIndex = progress >= 50 ? 0 : progress;
  stage = "words";
  flashcard.hidden = false;
  quizCard.hidden = true;
  completeCard.hidden = true;
  nextButton.hidden = false;
  previousButton.hidden = false;
  document.querySelector("#modalHeading").textContent = topics[currentTopicIndex].title;
  renderWord();
  dialog.showModal();
}

function showComplete() {
  stage = "complete";
  saveTopicProgress(currentTopicIndex, 50);
  flashcard.hidden = true;
  quizCard.hidden = true;
  completeCard.hidden = false;
  previousButton.hidden = true;
  nextButton.querySelector("span:first-child").textContent = "Chọn chủ đề khác";
  document.querySelector("#modalStep").textContent = "50 / 50";
  document.querySelector("#modalProgressBar").style.width = "100%";
  document.querySelector("#modalHeading").textContent = "Mẹ và Sunny giỏi quá!";
  completeCard.querySelector("p").textContent =
    `Hai mẹ con đã hoàn thành chủ đề “${topics[currentTopicIndex].title}”.`;
  renderTopics();
  updateHomeProgress();
}

document.querySelectorAll(".lesson-launch, #startLesson").forEach((button) => {
  button.addEventListener("click", () => openLesson(0));
});

document.querySelector("#closeLesson").addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelector("#wordAudio").addEventListener("click", () => {
  speak(topics[currentTopicIndex].items[currentIndex].word, { slow: true });
});

document.querySelectorAll("[data-speak]").forEach((button) => {
  button.addEventListener("click", () => speak(button.dataset.speak));
});

nextButton.addEventListener("click", () => {
  if (stage === "complete") {
    dialog.close();
    document.querySelector("#topics").scrollIntoView({ behavior: "smooth" });
    return;
  }

  saveTopicProgress(currentTopicIndex, currentIndex + 1);
  updateHomeProgress();

  if (currentIndex < 49) {
    currentIndex += 1;
    renderWord();
  } else {
    showComplete();
  }
});

previousButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderWord();
  }
});

topicGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".topic-card");
  if (card) openLesson(card.dataset.topic);
});

document.querySelector("#streakButton").addEventListener("click", () => {
  showToast("Mẹ và Sunny đã bắt đầu một hành trình thật vui! 🔥");
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll("nav a").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

topics.forEach((topic) => {
  if (topic.items.length !== 50) {
    console.error(`${topic.title} hiện có ${topic.items.length} từ, cần đủ 50 từ.`);
  }
});

practicalExamples.forEach((examples, index) => {
  if (examples.length !== 50) {
    console.error(`${topicDefinitions[index].title} hiện có ${examples.length} câu, cần đủ 50 câu.`);
  }
});

renderTopics();
updateHomeProgress();
prepareEnglishVoice();
