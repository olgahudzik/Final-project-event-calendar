# jQuery - Ćwiczenia - Parallax

Zadanie będzie polagało na stworzeniu efektu parallax.

## Punkt 1
Zapoznaj się dokładnie z kodem HTML i CSS  dodanym do zadania. Zauważ, że mamy 3 elementy, które będziemy równolegle przesuwać.Wszystkie elementy znajdują się w divie -```scene```.

## Punkt 2
Przygotuj do pracy plik JavaScript. Dopisz event odpowiedzialny za sprawdzenie czy DOM został załadowany (pamiętaj, że zadanie maswz rozwiązać używając jQuery) i sprawdź czy działa (np poprzez wyświetlenie w konsoli napisu "Działa").

Stwórz funkcję, która będzie odpowiedzialna za obsługę efekty parallax. Pamiętaj o odpowiednich komentarzach i odpowiedniej nazwie dla funkcji.

Następnie znajdź następujące elementy i zapisz je do zmiennych:

1. Kontener ```scene```
2. Wszystkie elementy o klasie ```elements```

Sprawdż czy wyszukałeś odpowiednie elementy i czy ich ilość się zgadza.

Wypisz zmienne w konsoli, żeby upewnić się czy zawierają poprawne dane.

## Punkt 3
Dla każdego elementu jest ustawiony dataset w postaci 3 atrybutów ```data```. W pętli (each) pobierz te elementy i ustaw wartości css każdemu elementowi w następujący sposób:

* wartość z pola data-z ustaw z-index,
* wartość z pola data-x ustaw left
* wartość z pola data-y ustaw top

## Punkt 4
Ustaw na elemencie ```scene``` eventy ```mouseenter``` oraz ```mousemove```. Sprawdź czy się wywołują w zależności od ich przeznaczenia.
Na początku funkcji definiowaleś zmienne przetrzymujące scene i elementy. Dopisz w tamtym miejscu jeszcze dwie zmienne, ktore będa przetrzymywały pozycję myszki przy wjechaniu na scenę możesz nazwać te zmienne jako ```oldMousePositionX``` i  ```oldMousePositionY``` i obie ustaw na 0.
W miejscu oczekiwania na wjechanie myszki (event mouseenter) podstaw pod zmienne ```oldMousePositionX``` i  ```oldMousePositionY``` nowe wartości pozycji myszki czyli ```event.offsetX``` i ```event.offsetY```.


Dlaczego używamy eventu ```mouseenter```, a nie ```mouseover```?
Zajrzyj koniecznie do linka [mouseenter vs mouseover](http://jsfiddle.net/ZCWvJ/7/)

## Punkt 5
Kolejny krok to uruchomienie elementów w zależności od ruchów myszki - kod wewnątrz funkcji dla eventu ```mousemove```. Ustaw dwie zmienne przechowujące pozycję X i Y myszki ```currentMousePositionX``` i ```currentMousePositionX```.

## Punkt 6
Teraz musimy ustawić pozycję myszki. Na początek sprawdź czy przypadkiem nie najeżdżamy na element czyli wykorzystaj ```event.target``` i ```this```. Jeżeli najedziey na kwadrat to zwiększ aktualną pozycję myszki o wartość pobraną z css (dla odpowiednich wartości left i top - pobierz je poprostu z bieżącego elementu event.target). Unikniemy w ten sposób "migotania kwadratów"

## Punkt 7
Stwórz następnie dwie zmienne  określające przesunięcie np. ```mouseMoveX``` oraz ```mouseMoveY```.
Podstaw pod zmienne różnice pomiędzy aktualną pozycją myszki, a tą kiedy myszka wjechała na scenę.

## Punkt 8
Bedąc wciąż wewnątrz funkcji dla eventu mousemove, ustaw w pętli dla każdego kwadratu przesunięcie left i top uzależniając je od wartości ```speed```. Pobierzesz ją z atrybutu data ustawionego w html dla każdego elementu. Oblicz to przesunięcie w nastepujący sposób:
* np dla pozycji left będzie to ```aktualna pozycja left + mouseMoveX * speed```
* analogicznie dla pozycji top.

## Punkt 9
Ostatni krok w tym zadaniu to podstawienie pod poprzednią pozycję myszki ```oldMousePositionX``` i ```oldMousePositionY``` bieżącej pozycji myszki ```currentMousePositionX``` i ```currentMousePositionX```.

## Punkt 10
Sprawdź jak działa twoja strona. Widzisz jakieś problemy?
