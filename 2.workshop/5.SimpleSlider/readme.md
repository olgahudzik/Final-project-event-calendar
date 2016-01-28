# jQuery - Ćwiczenia - SimpleSlider

Zadanie będzie polagało na napisaniu prostego slidera. Ćwiczenie podzielone jest na punkty. Pamiętaj żeby trzymać się dokładnie treści punktów i robić je po kolei.

Po skończeniu zadania pamiętaj o zrobieniu commita.

## Punkt 1
Zapoznaj się z kodem HTML dodanym do zadania. Do zrobienia slidera zazwyczaj musimy odpowiednio dostosować style dla listy, w której znajdują się obrazki.
Dlatego po dodaniu  klasy ```slider``` do odpowiedniego elementu wykonaj nastepujące kroki w css:

1. Ustaw elementy listy obok siebie, (jak widzisz obrazki nie mieszczą się wszystkie obok siebie, trzeba będzie ustawić kontenerowi zewnętrznemu (```ul```) taką szerokość, aby zmieściły się wszystkie obrazki obok siebie. Zrobimy to w js, ale sprobuj narazie ustawić
taką szerokość kontenera, aby wszystkie obrazki się zmieściły),
2. Wyzeruj margines i padding dla elementu ul (pamiętasz, że przeglądarka nadaje domyślne style niektorym elementom?)
3. Ustaw szerokość kontenera nad elementem ul na szerokośćjednego obrazka i nadaj mu styl ```overflow: hidden```.

## Punkt 2
Przygotuj do pracy plik JavaScript. Dopisz event odpowiedzialny za sprawdzenie czy DOM został załadowany (pamiętaj, że zadanie maswz rozwiązać używając jQuery) i sprawdź czy działa (np poprzez wyświetlenie w konsoli napisu "Działa").

Stwórz funkcję, która będzie odpowiedzialna za cała animację galerii. Pamiętaj o odpowiednich komentarzach i odpowiedniej nazwie dla funkcji.

W stworzonej funkcji znajdź następujące elementy i zapisz je do zmiennych:

1. Guzik `Next`,
2. Guzik `Prev`,
3. Wszystkie elementy listy (zapisz do tablicy),
4. Dodaj też zmienną liczbową, która będzie określała index obrazka, który jest aktualnie widoczny (na początku będzie to pierwszy obrazek - czyli zmienna będzie wskazywała na index 0).
5. Ustaw też zmienną, która będie przetrzymywać szerokość jednego obrazka, przyda nam się aby ustawić szerokość kontenera ul za pomocą JavaScriptu, a nie css-a.

Sprawdż czy wyszukałeś odpowiednie elementy i czy ich ilość się zgadza.
Wypisz zmienne w konsoli, żeby upewnić się czy zawierają poprawne dane.

## Punkt 3
Ustaw w funkcji szerokość kontenera ul, na podstawie danych, które przetrzymują Twoje zmienne, (pamiętaj, aby usunąć szerokość kontenera z css)

## Punkt 4
Dodaj do przycisku next event, który zareaguje na kliknięcie (nie używaj pętli - pamiętaj że działamy w jQuery).
Event na razie ma wyświetlać jakiś tekst w konsoli.

## Punkt 5
Zmodyfikuj event tak, żeby po kliknięciu w przycisk:

1. Zwiększyć zmienną przetrzymującą index obrazka,
2. Sprawdzić, czy przypadkiem zmienna nie przekracza liczby wszystkich obrazków, jeśli tak to trzeba ją odpowiednio przestawić
3. Jeśli wszystko jest wporządku, zaanimuj przesuwanie slajdu, (wykorzystaj przesuwanie offsetem left), pamiętaj, że element, który przesuwasz (ul) musi mieć ustawione position relative. Zastanów się również, w którą stronę chcesz się przesuwać.

## Punkt 6
Dodatj drugi event, dla przycisku prev. Wykonaj takie same kroki jak dla eventu next. Pamiętaj tylko o warunku, którego nie może przeroczyć zmienna określająca index obrazka.

## Punkt 7
Spróbuj stworzyć jeszcze jedną funkcję, która będzie odpowiedzialna za przesuwanie slajdu po kliknięciu w dowolny przycisk.
Zastanów się jakie parametry należy do niej przekazać. Ustaw jej odpowiednią nazwę i komentarz.

## Punkt 8
Sprawdź jak działa twoja strona. Czy widzisz jakieś problemy?
