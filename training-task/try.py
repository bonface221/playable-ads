fruits = ['mangoes', 'pawpaw', 'oranges', 'banana']
cerials = ['maize', 'beans']

combined = [*fruits, *cerials]

school = {
    'page': 1,
    'students': [
        {'name': 'boniface', 'age': 23, 'school': 'moringa school'},
        {'name': 'patrick', 'age': 26, 'school': 'UEBA'},
        {'name': 'Kinuthia', 'age': 18, 'school': 'karima'}
    ]
}
school2 = {
    'page': 2,
    'students': [
        {'name': 'boniface222', 'age': 23, 'school': 'moringa school'},
        {'name': 'patrick222', 'age': 26, 'school': 'UEBA'},
        {'name': 'Kinuthia222', 'age': 18, 'school': 'karima'}
    ]
}

students = [
    *school['students'],
    *school2['students']
]
print(students)

final = [
    {'name': 'boniface', 'age': 23, 'school': 'moringa school'},
    {'name': 'patrick', 'age': 26, 'school': 'UEBA'},
    {'name': 'Kinuthia', 'age': 18, 'school': 'karima'},
    {'name': 'boniface222', 'age': 23, 'school': 'moringa school'},
    {'name': 'patrick222', 'age': 26, 'school': 'UEBA'},
    {'name': 'Kinuthia222', 'age': 18, 'school': 'karima'}
]
