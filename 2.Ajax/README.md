# jQuery - Ajax

## Opis API
* GET: http://api.coderslab.pl/movies -> zwraca tablicę z obiektami filmów.
* GET: http://api.coderslab.pl/movies/{id} -> zwraca jeden film + jego seanse. Zwraca false jak nie ma takiego filmu.
* POST: http://api.coderslab.pl/movies -> dodaje nowy film do bazy. JSON powinien wyglądać tak:
```{"title":"Foo","description":"bar","screenings":[{"screening_date":"Foo sccrening 1"},{"screening_date":"Foo sccrening 2"}]}```
* PUT: http://api.coderslab.pl/movies/{id} -> zmienia film. JSON powinien wyglądać tak:
```{"title":"FOOBAR","description":"BARFOO","screenings":[{"screening_date":"Foo sccrening 1"},{"screening_date":"Foo sccrening 2"},{"screening_date":"Foo sccrening 3"},{"screening_date":"Foo sccrening 4"}]}```
Można dowolnie modyfikować ilość seansów w filmie (ale trzeba podać wszystkie - jak nic nie podamy to kasuje stare seanse). Zwraca seans jeżeli się udało, false jeżeli nie.
* DELETE: http://api.coderslab.pl/movies/{id} -> Kasuje film. Zwraca zawsze true.
