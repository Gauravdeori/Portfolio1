* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: #0f0f0f;
    color: #fff;
    line-height: 1.6;
}

/* NAV */
nav {
    display: flex;
    justify-content: space-between;
    padding: 20px 10%;
    background: #000;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li a {
    margin-left: 20px;
    color: #fff;
    text-decoration: none;
}

.logo {
    color: #ff4d4d;
}

/* HERO */
.hero {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.hero span {
    color: #ff4d4d;
}

.btn {
    margin-top: 20px;
    padding: 12px 25px;
    background: #ff4d4d;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
}

/* SECTIONS */
.section {
    padding: 80px 10%;
    text-align: center;
}

.highlight {
    background: #151515;
}

.project-list {
    margin: 20px 0;
    list-style: none;
}

.project-list li {
    margin: 8px 0;
}

/* BUTTON OUTLINE */
.btn-outline {
    display: inline-block;
    padding: 10px 22px;
    border: 1px solid #ff4d4d;
    color: #ff4d4d;
    text-decoration: none;
    border-radius: 5px;
}

/* SKILLS */
.skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.skills span {
    background: #222;
    padding: 10px 18px;
    margin: 8px;
    border-radius: 20px;
}

/* FOOTER */
footer {
    text-align: center;
    padding: 20px;
    background: #000;
    font-size: 14px;
}
