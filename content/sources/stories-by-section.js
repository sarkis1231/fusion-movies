const resolve = ({
                     website,
                     section,
                     size = 1,
                     offset = 0
                 }) => {
    const body = encodeURIComponent(JSON.stringify({
        query: {
            bool: {
                must: [
                    {
                        term: {
                            type: 'story'
                        }
                    },
                    {
                        nested: {
                            path: 'taxonomy.sections',
                            query: {
                                bool: {
                                    must: {
                                        term: {
                                            'taxonomy.sections': section
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        }
    }))
    return `content/v4/search/published/?website=${website}&body=${body}&size=${size}&from=${offset}&sort=publish_date:desc`
}

export default {
    resolve,
    params: [
        {
            name: 'website',
            displayName: 'Website',
            type: 'text'
        },
        {
            name: 'section',
            displayName: 'Section ID',
            type: 'text'
        },
        {
            name: 'size',
            displayName: 'Site',
            type: 'number'
        },
        {
            name: 'offset',
            displayName: 'Offset',
            type: 'number'
        }
    ]
}