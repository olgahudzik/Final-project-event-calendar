# jQuery - Ćwiczenia - Questions and Answers;

Zadanie będzie polagało na napisaniu prostego schematu pytań i odpowiedzi. Docelowo odpowiedzi mają być niewidoczne, mają ukazywać się dopiero po kliknięciu na pytanie. 

## Punkt 1
Zapoznaj się z kodem HTML i CSS dodanym do zadania. Wszystkie pytania i odpowiedzi są ulożone w divie. Dodaj mu odpowiednią klasę.

## Punkt 2
Przygotuje do pracy plik JavaScript. Dopisz event ```DomContentLoaded``` (pamiętaj że zadanie maswz rozwiązać używając jQuery) i sprawdź czy działa (np poprzez wyświetlenie w konsoli napisu "Działa").
Następnie znajdź następujące elementy i zapisz je do zmiennych:
1. Wszystkie pytania (czyli elementy ```h1```)
2. Wszystkie odpowiedzi (czyli elementy ```p```)

Wypisz zmienne w konsoli żeby upewnić się czy zawierają poprawne dane.

## Punkt 3
Dodaj do wszystkich elementów ```h1``` event który zareaguje na kliknięcie (nie używaj pętli - pamiętaj że działamy w jQuery).

Event na razie ma wyświetlać jakiś tekst w konsoli.

## Punkt 4
Zmodyfikuj event tak żeby po kliknięciu w element ```h1``` następny element ```p``` pokazał się na stronie (dla ładnego efektu możesz zastosować jakąś animację). Jeżeli element jest już widoczny to ma zniknąć z strony.

## Punkt 5
Dodatkowo możemy spowodować że tylko jedna z naszych odpowiedzi będzie widoczna na ekranie. Żeby uzyskać taki efekt napisz w evencie kod który spowwoduje że wszystkie paragrafy, poza tym przypisanym do klikniętego pytania, mają zniknąć. Zachowanie paragrafu przypisanego do pytania się nie zmienia.

## Punkt 6
Sprawdź jak działa twoja strona. Zobacz czy znajdziesz jakiś problem.