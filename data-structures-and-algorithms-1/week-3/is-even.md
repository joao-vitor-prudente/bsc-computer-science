# Calculate is even in any base

```
function isEven(n, res <- true)
    if n = 0
        return res
    end if
    return not isEven(n - 1)
end function
```

The base would only matter for knowing how to calculate n - 1

## Portuguese version

```
função éPar(n, res <- verdadeiro)
    se n = 0
        retorna res
    fim se
    returna não éPar(n - 1)
fim função
```
