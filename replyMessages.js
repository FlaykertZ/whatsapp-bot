function mainMessage(message){
    message.reply(`💙 היי וברוכים הבאים למערך תקשוב חטיבה 5 💙\n
        אנו נותנים מענה לכלל משתמשי המחשוב בחטיבה\n
        שעות הפעילות שלנו נעות בין השעות 00:00 ל00:00 ליום שאחרי.

        1️⃣ - לתקלות מחשוב
        2️⃣ - לתקלות בנושאים אחרים
        3️⃣ - לרעיונות לבוט, הוספה, תלונות על באגים וכו

        בוט זה נוצר על ידי ד. חבקין\n
        שימו לב שבוט זה עדיין בפיתוח וישנן פונקציות שלא יעבדו 100 אחוז`)
}

function computerProblem(message){
    message.reply(`
        1️⃣ - לתקלות בנושא ווינדואוס
        2️⃣ - לתקלות בנושא טלפוניה
        3️⃣ - לתקלות בנושא אינטרנט
        0️⃣ - חזרה לתפריט הראשי`)
}

function otherProblems(message){
    message.reply(`
        1️⃣ - לתקלות בנושא משואה
        2️⃣ - למספרי טלפון חשובים
        3️⃣ - לתקלות בנושא כרטיסים
        0️⃣ - חזרה לתפריט הראשי`)
}

function windowsProblems(message){
    message.reply(`היי, לפניך מספר פתרונות לתקלות שיכולות להיות לך בווינדואוס
        במידה והפתרונות האלו לא עוזרות, יש לרשום "היי" ולבקש נציג
        \n
        במידה והמחשב תקוע, דברים עולים לאט וכו*, יש לבצע כיבוי והדלקה מלא למחשב*
        שימו לב שיכול להיות משתמשים אחרים שמחוברים למחשב הזה וזה מה שגורם לו להיות איטי, במידה ואתם יודעים שיש מישהו שהיה מחובר למחשבכם ולא שמר דברים שהוא עבד עליהם
        יש לבקש ממנו לשמור.
        \n
        `)
}

function telephoneProblems(message){
    message.reply(`היי, לפניך מספר פתרונות לתקלות שיכולות להיות לך הקשורות לטלפוניה
        במידה והפתרונות האלו לא עוזרות, יש לרשום "היי" ולבקש נציג
        \n
        במידה והצג של הטלפון מכובה, והוא עבד בעברו, יש לחזק חיבור של כבל הרשת המחובר לטלפון.
        במידה והכבל רשת מחובר טוב ועדיין הצג לא מופיע, יש לקרוא לאנשי המחשוב
        \n
        במידה ואתם רוצים לבצע שיחות בטלפון *סיסקו*, אך אתם לא מקבלים שיחות או לא יכולים לשלוח שיחות
        יש לוודא שהמשתמש מוגדר בסיסקו כמו שצריך
        בשביל לעשות זאת יש להסתכל על המסך של הטלפון ולראות שרשום לכם "התחברות נציג"
        במידה וכן, יש לרשום שם משתמש וסיסמא כאשר שם המשתמש והסיסמא זה מספר הטלפון של הסיסקו
        *שימו לב*
        כאשר אתם רושמים את המספר טלפון בשם המשתמש, יש לראות שזה רושם לכם מספרים ולא אותיות
        במידה וזה רושם לכם אותיות יש ללחוץ כמה פעמים על אותו המספר עד שתראו את המספר עצמו.`)
}

function internetProblems(message){
    message.reply(`היי, לפניך מספר פתרונות לתקלות שיכולות להיות לך הקשורות לאינטרנט
        במידה והפתרונות האלו לא עוזרות, יש לרשום "היי" ולבקש נציג.
        \n
        במידה ואתם מחוברים למשתמש שלכם במחשב, אך רשום לכם שאין אינטרנט כאשר אתם פותחים כרום,
        במידה ואתם אנשי מחשוב, יש לבדוק הגדרות רשת תואמות ושיש ביטים לאינטרנט
        במידה ואתם לא אנשי מחשוב, יש לפנות לאנשי המחשוב שלכם.
        \n
        במידה ואתם לא מצליחים להתחבר למחשב שלכם, ורשום הודעה כגון "Domain specified is not available", יש לפנות לאנשי המחשוב
        במידה ואתה איש מחשוב, יש להיכנס עם המשתמש החזק שלכם (לרוב .\\su) ולוודא הגדרות רשת.
        במידה ואין לכם משתמש חזק, יש להיכנס דרך משתמש אדמין וסיסמאת לאפס, במידה ואין לכם סיסמאת לאפס או המחשב אינו בדומיין, יש לפרמט את המחשב.
        \n`)
}

async function ideasMessage(client, message){
    message.reply(`היי, אתם מוזמנים לרשום פה את הרעיון שלכם ונציג יתפנה אליכם בזמן הקרוב 🙏`)

    const danielNumber = 972526872419
    const chatId = danielNumber + "@c.us"

    const danielMessage = `נציג מחפש אותך בבוט`

    await client.sendMessage(chatId, danielMessage)
}

function workInProgress(message){
    message.reply(`היי, מכיוון שבוט זה הוא חדש אין לו הרבה פונקציות, נשמח שתרשמו רעיונות ונוסיף אותם לבוט 🙏
        \n בתודה, מנהל הבוט.`)
}

module.exports = { mainMessage, workInProgress, ideasMessage, computerProblem, otherProblems, windowsProblems, telephoneProblems, internetProblems };
