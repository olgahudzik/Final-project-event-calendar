# jQuery - Ćwiczenia - Forms

Zadanie będzie polagało na stworzeniu skryptu walidującego pola formularza oraz przesłanie danych pod adres [http://www.htmlcodetutorial.com/cgi-bin/mycgi.pl](http://www.htmlcodetutorial.com/cgi-bin/mycgi.pl)

## Punkt 1
Zapoznaj się dokładnie z kodem HTML  dodanym do zadania.
Dopisz adres pod który chcemy wysłać formularzz do elementu form w odpowiedni atrybut.

## Punkt 2
Przygotuj do pracy plik JavaScript. Dopisz event odpowiedzialny za sprawdzenie czy DOM został załadowany (pamiętaj, że zadanie maswz rozwiązać używając jQuery) i sprawdź czy działa (np poprzez wyświetlenie w konsoli napisu "Działa").

Stwórz funkcję, która będzie odpowiedzialna za animowanie progressBarami. Pamiętaj o odpowiednich komentarzach i odpowiedniej nazwie dla funkcji.

Następnie znajdź następujące elementy i zapisz je do zmiennych:

1. Wszystkie przyciski,
2. Wszystkie elementy div, symulujące progress bary.

Sprawdż czy wyszukałeś odpowiednie elementy i czy ich ilość się zgadza.

Wypisz zmienne w konsoli, żeby upewnić się czy zawierają poprawne dane.

## Punkt 3
Dodaj do wszystkich przyciskow event, który zareaguje na kliknięcie (nie używaj pętli - pamiętaj że działamy w jQuery).
Event na razie ma wyświetlać jakiś tekst w konsoli.

## Punkt 4
Zmodyfikuj event tak, żeby po kliknięciu w przycisk:

1. Pobrać do zmiennych wszystkie atrybuty data,
2. Ustalić, który progress bar (div) dotyczy tego przycisku (możesz wykorzystać funkcję filter - sprawdź dokumentację jeśli jej nie pamiętasz)
3. Na podstawie zmiennnej znalezionej w poprzednim podpunkcie, wyszukaj span (wewnątrz diva progress bar)
4. Następnie znalezionemu odpowiedniemu elementowi w poprzednich punktach ustaw odpowiednią klasę z kolorem, a także zaanimuj zmianę jego szerokości.

## Punkt 5
Sprawdź jak działa twoja strona. Czy widzisz jakieś problemy?
