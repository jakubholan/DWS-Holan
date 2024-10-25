import random

# 1. Vytvořte pole, ve kterém bude uloženo 9 číselných hodnot, které budou přeházená (0-100).
pole1 = random.sample(range(101), 9)

# 2. Vypište první, prostřední a poslední hodnotu pole.
prvni_hodnota = pole1[0]
prostredni_hodnota = pole1[len(pole1) // 2]
posledni_hodnota = pole1[-1]

print(f"První hodnota: {prvni_hodnota}")
print(f"Prostřední hodnota: {prostredni_hodnota}")
print(f"Poslední hodnota: {posledni_hodnota}")

# 3. Zaměňte 5 indexovou hodnotu pole za číslo 34.
pole1[5] = 34

# 4. Vypište indexově 7 hodnotu z pole.
hodnota_index_7 = pole1[7]
print(f"Hodnota na indexu 7: {hodnota_index_7}")

# 5. Vypište délku pole.
delka_pole1 = len(pole1)
print(f"Délka pole: {delka_pole1}")

# 6. Vypište minimální a maximální hodnotu pole.
min_hodnota = min(pole1)
max_hodnota = max(pole1)
print(f"Minimální hodnota: {min_hodnota}")
print(f"Maximální hodnota: {max_hodnota}")

# 7. Vytvořte druhé pole s libovolnými čísly a libovolnou délkou.
pole2 = [12, 45, 78, 23, 56, 89]

# 8. Sečtěte pole a vypište je.
suma_pole2 = sum(pole2)
print(f"Suma pole č. 2: {suma_pole2}")

# 9. Sečtěte indexově 1 a 5 hodnotu z pole č.2.
suma_index_1_5 = pole2[1] + pole2[5]
print(f"Suma hodnot na indexu 1 a 5: {suma_index_1_5}")

# BONUS - vymyslete jak random zamícháte již vytvořené pole č.2.
random.shuffle(pole2)
print(f"Zamíchané pole č. 2: {pole2}")
