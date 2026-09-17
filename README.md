# DS3103-Webutvikling

**Medvirkende: Alexander, Michael, Kenneth**

**Karakter: A**

## Teknologier/teknikker brukt:
### React + Typescript, C#/.NET, Tailwind CSS, SQLite, BrowserRouter

---

**Ansvarsområder (delt inn i hvert vårt domene):**

Alexander: Athletes, styling, ```ImageController```, API dokumentasjon

Michael: Finance

Kenneth: Venues

---
I dette prosjektet laget vi vårt eget API med egne endepunkter og ved hjelp av SQLite laget vi vår egen database med ferdige "default" felter slik at API'et kan hente data fra databasen.
Frontend kan deretter rendre elementer til de forskjellige skjermene.


> [!NOTE]
> Du må ha ```npm``` og ```dotnet``` installert for å kunne kjøre programmet lokalt

---
## Steg for å kjøre programmet lokalt:

### 1. Klon prosjektet:
```
https://github.com/Kennephh/DS3103-exam-h-25.git
```

### 2. Åpne 2 terminaler
- Åpne enten to terminal vinduer eller to faner i terminalvinduet
- Gå til den nye prosjekt-mappen du klonet fra Git
- Kopier og kjør kommandoene nedenfor

```
cd SportsWorldAPI
dotnet restore
dotnet watch run
```

<img width="590" height="378" alt="image" src="https://github.com/user-attachments/assets/44b8be59-2e63-4239-b88c-cd5d5e5ede01" />


>[!WARNING]
> Du må starte backend serveren før du starter frontend serveren!

### 3.  Åpne den andre terminalen
- Åpne den andre terminalen
- Kopier og kjør kommandoene under

```
cd sports-world
npm install
npm run dev
```

<img width="590" height="378" alt="image" src="https://github.com/user-attachments/assets/598bed89-1af7-4e05-91f0-ed9e4914d4f3" />
