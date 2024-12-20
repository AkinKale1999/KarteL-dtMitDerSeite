# Card Loader Beispiel

Dieses Projekt simuliert einen Inhalts-Loader mit einem animierten Hintergrund für eine Karten-Komponente. Nach einer festgelegten Verzögerung wird der Inhalt in die Karte geladen und die Animationen werden entfernt, wodurch die tatsächlichen Daten angezeigt werden.

## Projektstruktur

- **HTML**: Die Struktur der Karte mit Platzhaltern für den Inhalt (Titel, Auszug, Autoreninfo, etc.)
- **CSS**: Wird hier nicht angezeigt, aber es wird davon ausgegangen, dass Stile für `.animated-bg` und `.animated-bg-text` definiert sind, um die Ladeanimationen zu handhaben.
- **JavaScript**: Steuert das Laden der Daten und das Entfernen der Animationen nach einer Verzögerung.

## Dateien

- `index.html`: Enthält die HTML-Struktur der Karte.
- `styles.css`: Enthält die Stile für die Kartenelemente (die Animationsstile sind hier angenommen).
- `script.js`: Steuert die Logik zum Ersetzen der Platzhalter durch echte Inhalte nach einer Verzögerung.

## Funktionsweise

1. **HTML-Struktur**: 
   - Die `div`-Elemente mit den Klassen `animated-bg` und `animated-bg-text` zeigen während des Ladevorgangs animierte Hintergründe.
   - Sobald die Daten geladen sind, werden die Animationen entfernt und der Inhalt angezeigt.

2. **JavaScript**:
   - Die Funktion `setTimeout` sorgt dafür, dass die Inhalte nach 2 Sekunden geladen werden.
   - Daten wie Titel, Auszug und Autoreninformationen werden in die Kartenelemente eingefügt.
   - Animationsklassen (`animated-bg`, `animated-bg-text`) werden von den Elementen entfernt, sobald die Daten geladen sind.

## Installation 

git clone https://github.com/AkinKale1999/KarteL-dtMitDerSeite.git
