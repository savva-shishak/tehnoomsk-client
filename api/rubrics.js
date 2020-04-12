export function getAllRubrics() {
    return new Promise(res => {
        res(rubrics)
    })
}

export const rubrics = [
    {
        id: 1,
        name: "Производство",
    },
    {
        id: 2,
        name: "Наука",
    },
    {
        id: 3,
        name: "Связь",
    },
    {
        id: 4,
        name: "ВПК",
    },
    {
        id: 5,
        name: "Космос",
    },
    {
        id: 6,
        name: "ИТ-сфера",
    },
    {
        id: 7,
        name: "Транспорт",
    },
    {
        id: 8,
        name: "Образование",
    },
    {
        id: 9,
        name: "Нефть и газ",
    },
    {
        id: 10,
        name: "Медицина",
    },
    {
        id: 11,
        name: "Безопасность",
    },
    {
        id: 12,
        name: "Автосфера",
    },
    {
        id: 13,
        name: "Блоги",
    },
    {
        id: 14,
        name: "О нас",
    },
    {
        id: 15,
        name: "Видеоканал",
    },
    {
        id: 16,
        name: "Разное",
    },
    {
        id: 17,
        name: "Рейтинг",
    },
    {
        id: 18,
        name: "Архив",
    },
]