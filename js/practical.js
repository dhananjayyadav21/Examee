
async function reloadData() {
    let categoryOption = document.getElementById("categoryOption");
    let defaultSelectedCategory = sessionStorage.getItem("categoryOption");

    if (defaultSelectedCategory == null) {
        defaultSelectedCategory = "BSC-IT"
    }
    console.log(defaultSelectedCategory)
    let data = await loadData(defaultSelectedCategory);
    console.log(data)

    let grid = document.getElementById("grid");
    grid.innerHTML = "";
    const isLogin = getLoginUserName() !=null;
    data.forEach(sem => {
        const semNotesGroup = document.createElement('div');
        semNotesGroup.className = 'sem-notes-group';

        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-cantainer';

        const h2 = document.createElement('h2');
        h2.textContent = `${sem.Name} PRACTICALS`;

        cardContainer.appendChild(h2);

        console.log(sem)

        sem.Notes.forEach(element => {

            const cardHTML = `
                <img src="/notesimg/${element.converImage}" width="70px" onerror="this.onerror=null;this.src='/notesimg/practical-III.png';">
                    <h3 class="tital">${element.Subject}</h3>
                    <p>Download Journal Here</p>
                    <button id="downloadBtn"><a href="${isLogin? element.NotesUrl.includes('folder')? element.NotesUrl: '/view-notes.html?path='+element.NotesUrl:"/login.html"}">Journal PDF</a></button>`;

            let card = document.createElement("div");
            card.className = "card";
            card.innerHTML = cardHTML;

            cardContainer.appendChild(card);
            semNotesGroup.appendChild(cardContainer);
        });
        grid.appendChild(semNotesGroup);
    });

}


async function loadData(categoryName) {
    let data = [
        {
            "Name": "BSC-IT",
            "Sems": [
                {
                    "Name": "SEMESTER-I ",
                    "Notes": [
                        {
                            "Subject": "Math (DM)",
                            "converImage": "practical-II.png",
                            "NotesUrl": "https://drive.google.com/file/d/1-N3PaBhkjZzhA7F2IdDps2jaxvRg5U12"
                        },
                        {
                            "Subject": "Operating System",
                            "converImage": "practical-II.png",
                            "NotesUrl": "https://drive.google.com/file/d/1-MP2TP9fdJC6K930pvejxAYketVl8Ns2"
                        },
                        
                        {
                            "Subject": "C Programming (IP)",
                            "converImage": "practical-II.png",
                            "NotesUrl": "https://drive.google.com/file/d/1-NtrQ92tCdD446yscRn9C_njU8Q4R63a"
                        },
                        {
                            "Subject": "DBMS",
                            "converImage": "practical-II.png",
                            "NotesUrl": "https://drive.google.com/file/d/1-OOvTaamHI7X3pu5lHa5jpDIAYkvqNGh"
                        },

                    ]
                },
                {
                    "Name": "SEMESTER-II ",
                    "Notes": [
                        {
                            "Subject": "Web Development",
                            "converImage": "practical-I.png",
                            "NotesUrl": "https://drive.google.com/file/d/1-QI0VwfweTO0rJAAp5Cd2g0XowyiwZF7"
                        },
                        {
                            "Subject": "OOPS (C++)",
                            "converImage": "practical-I.png",
                            "NotesUrl": "https://drive.google.com/file/d/1-Rqw-vrIDraXpmBv9FqkMAwC9kVMgynf"
                        },
                    ]
                }
            ]
        },
        {
            "Name": "MSC-IT",
            "Sems": [
                {
                    "Name": "SEM I",
                    "Notes": [
                        {
                            "Subject": "Data Mining",
                            "converImage": "image5.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        },
                        {
                            "Subject": "Distributed System",
                            "converImage": "image6.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        },
                        {
                            "Subject": "Data Analysis Tools",
                            "converImage": "image5.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        },
                        {
                            "Subject": "Software Testing",
                            "converImage": "image6.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        }
                    ]
                },
                {
                    "Name": "SEM II",
                    "Notes": [
                        {
                            "Subject": "Mobile Computing",
                            "converImage": "image7.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        },
                        {
                            "Subject": "Advanced Computer Networks",
                            "converImage": "image8.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        },
                        {
                            "Subject": "Cloude Computing",
                            "converImage": "image7.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        },
                        {
                            "Subject": "Advanced Database System",
                            "converImage": "image8.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        }
                    ]
                }
            ]
        },
        {
            "Name": "B.COM",
            "Sems": [
                {
                    "Name": "B.COM",
                    "Notes": [
                        {
                            "Subject": "Bachelor of Commerce",
                            "converImage": "image9.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        },
                        {
                            "Subject": "Accounting & Finance",
                            "converImage": "image10.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        },
                        {
                            "Subject": "Banking & Insurance",
                            "converImage": "image9.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        },
                        {
                            "Subject": "Fincial Marketing",
                            "converImage": "image10.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        }

                    ]
                },
                {
                    "Name": "SEM II",
                    "Notes": [
                        
                    ]
                }
            ]
        },
        {
            "Name": "12TH-SCIENCE",
            "Sems": [
                {
                    "Name": "12TH-SCIENCE",
                    "Notes": [
                        {
                            "Subject": "Maths-I",
                            "converImage": "image13.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        },
                        {
                            "Subject": "Maths-II",
                            "converImage": "image13.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        },
                        {
                            "Subject": "Physics",
                            "converImage": "image14.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        },
                        {
                            "Subject": "Chemistry",
                            "converImage": "image13.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        },
                        {
                            "Subject": "Biology",
                            "converImage": "image13.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        },
                        
                    ]
                },
                {
                    "Name": "SEM II",
                    "Notes": [
                        
                    ]
                }
            ]
        },
        {
            "Name": "12TH-COMMERCE",
            "Sems": [
                {
                    "Name": "12TH-COMMERCE",
                    "Notes": [
                        {
                            "Subject": "Mathamatics & Statics",
                            "converImage": "image9.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        },
                        {
                            "Subject": "Economics",
                            "converImage": "image10.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        },
                        {
                            "Subject": "Book Kepping and Accountancy",
                            "converImage": "image9.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        },
                        {
                            "Subject": "Business Studies",
                            "converImage": "image10.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        },
                        {
                            "Subject": "Accountancy",
                            "converImage": "image10.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy"
                        }

                    ]
                },
                {
                    "Name": "SEM II",
                    "Notes": [
                        
                    ]
                }
            ]
        },

    ];

    let filterdData = data.find(cat => cat.Name == categoryName);
    if (filterdData != null) {
        return filterdData.Sems;
    }
    return [];
}
